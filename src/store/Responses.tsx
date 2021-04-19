import { IProduct } from "../models";
export interface ReceiveProductsList {
  type: "RECEIVE_PRODUCTS_LIST";
  products: IProduct[];
}
export interface ReceiveProduct {
  type: "RECEIVE_PRODUCT";
  product: IProduct | null;
}
