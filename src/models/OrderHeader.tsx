import { IOrderRow } from "./OrderRow";

export interface IOrderHeader {
  id: number;
  rows?: IOrderRow[] | null;
}
