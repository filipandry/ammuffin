import { IProduct } from "../models";

export interface IData {
  getProducts(): Promise<IProduct[]>;
  getProduct(id: number): Promise<IProduct | null>;
}
