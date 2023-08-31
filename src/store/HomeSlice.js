import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    featureProduct: [],
    featureSingleProduct: [],
    Products: [],
    cart: [],
  },
  reducers: {
    getFeaturedProductDataSuccess: (state, action) => {
      const featuredData = action.payload;
      state.featureProduct = featuredData.featureProd.filter((feat) => {
        return feat.featured === true;
      });
    },
    getSingleProductDataSuccess: (state, action) => {
      const singleData = action.payload.singleProd;
      state.featureSingleProduct = [singleData];
    },
    getProductsDataSuccess: (state, action) => {
      const productsData = action.payload.Prod;
      state.Products = productsData;
    },
    AddCart: (state, action) => {
      const { product, quantity, color } = action.payload;
      const itemInCartIndex = state.cart.findIndex((p) => p.id === product.id);
      if (itemInCartIndex >= 1) {
        state.cart[itemInCartIndex].quantity += quantity;
      } else {
        const newItem = {
          ...product,
          quantity: quantity,
          selected_color: color,
        };
        state.cart.push(newItem);
      }
    },
    RemoveFromCart: (state, action) => {
      const id = action.payload.id;
      const FilterProduct = state.cart.filter((p) => p.id != id);
      state.cart = FilterProduct;
    },
  },
});

export const {
  getFeaturedProductDataSuccess,
  getSingleProductDataSuccess,
  getProductsDataSuccess,
  AddCart,
  RemoveFromCart,
} = counterSlice.actions;
export default counterSlice.reducer;
