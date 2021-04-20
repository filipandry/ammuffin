import { IProduct, IOrderHeader, IOrderRow } from "../models";

export interface IData {
  getProducts(): Promise<IProduct[]>;
  getProduct(id: number): Promise<IProduct | null>;
  getTopSellProducts(top: number): Promise<IProduct[]>;
  getOrders(): Promise<IOrderHeader[]>;
  getOrder(id: number): Promise<IOrderHeader | null>;
}
