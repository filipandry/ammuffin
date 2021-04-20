import { IOrderRow } from "./OrderRow";

export interface IProduct {
  id: number;
  code: string;
  images: Array<string | "*.png">;
  description: string;
  price: number;
  orders?: IOrderRow[] | null;
  sells?: number;
  type: "Kit" | "Product" | "Muffin" | "Filling" | "Cream";
}
