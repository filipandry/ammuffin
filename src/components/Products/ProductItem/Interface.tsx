import * as Store from "../../../store/Store";
import { RouteComponentProps } from "react-router";
import { IProduct } from "../../../models";

export interface IProps {
  item: IProduct;
}

// export type IProps = Store.StoreState &
//   typeof Store.actionsCreator &
//   ComponentProps &
//   RouteComponentProps<{}>;
