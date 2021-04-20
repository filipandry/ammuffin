import { IProduct } from "../models";
import {
  createSlice,
  createAsyncThunk,
  combineReducers
} from "@reduxjs/toolkit";
import { Data } from "../data/SampleData";

export interface StoreState {
  products?: IProduct[] | null;
  product?: IProduct | null;
  productsLoading?: boolean;
  productLoading?: boolean;
}

const defaultState: StoreState = {
  products: null,
  product: null,
  productsLoading: false,
  productLoading: false
};

export const requestProductsList = createAsyncThunk(
  "REQUEST_PRODUCTS_LIST",
  async (_, thunkApi) => {
    return await Data.getProducts();
  }
);
export const requestTopProductsList = createAsyncThunk(
  "REQUEST_TOP_PRODUCTS_LIST",
  async (top: number, thunkApi) => {
    return await Data.getTopSellProducts(top);
  }
);
export const requestProduct = createAsyncThunk(
  "REQUEST_PRODUCT",
  async (id: number, thunkApi) => {
    return await Data.getProduct(id);
  }
);

const storeSlice = createSlice({
  name: "STORE",
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestProductsList.fulfilled, (state, action) => {
        return { ...state, productsLoading: false, products: action.payload };
      })
      .addCase(requestTopProductsList.fulfilled, (state, action) => {
        return { ...state, productsLoading: false, products: action.payload };
      })
      .addCase(requestProduct.fulfilled, (state, action) => {
        return { ...state, productLoading: false, product: action.payload };
      });
  }
});

const reducer = combineReducers({
  store: storeSlice.reducer
});

export default reducer;
