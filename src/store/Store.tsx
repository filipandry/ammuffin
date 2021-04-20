import { IProduct } from "../models";
import { RequestProductsList, RequestProduct } from "./Requests";
import { ReceiveProductsList, ReceiveProduct } from "./Responses";
import { AppThunkAction } from "./";
import { Reducer, Action } from "redux";
import { Data } from "../data/SampleData";

type KnownAction =
  | RequestProductsList
  | RequestProduct
  | ReceiveProductsList
  | ReceiveProduct;
export interface StoreState {
  products?: IProduct[] | null;
  product?: IProduct | null;
  productsLoading?: boolean;
  productLoading?: boolean;
}

export const actionsCreator = {
  requestProductsList: (): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    Data.getProducts().then((res) => {
      dispatch({ type: "RECEIVE_PRODUCTS_LIST", products: res });
    });
    dispatch({ type: "REQUEST_PRODUCTS_LIST" });
  },
  requestProduct: (id: number): AppThunkAction<KnownAction> => (
    dispatch,
    getState
  ) => {
    Data.getProduct(id).then((res) =>
      dispatch({ type: "RECEIVE_PRODUCT", product: res })
    );
    dispatch({ type: "REQUEST_PRODUCT", id: id });
  }
};

const defaultState: StoreState = {
  products: null,
  product: null,
  productsLoading: false,
  productLoading: false
};

export const reducer: Reducer<StoreState> = (
  state: StoreState | undefined,
  incomingAction: Action
): StoreState => {
  if (state === undefined) {
    return defaultState;
  }
  const action: KnownAction = incomingAction as KnownAction;
  switch (action.type) {
    case "REQUEST_PRODUCTS_LIST":
      return { ...state, productsLoading: true };
    case "REQUEST_PRODUCT":
      return { ...state, productLoading: true };
    case "RECEIVE_PRODUCTS_LIST":
      return { ...state, productsLoading: false, products: action.products };
    case "RECEIVE_PRODUCT":
      return { ...state, productLoading: false, product: action.product };
  }
  return state;
};
