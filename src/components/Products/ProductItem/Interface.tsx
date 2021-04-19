import * as Store from "../../../store/Store";
import { RouteComponentProps } from "react-router";
import { IProduct } from "../../../models";

interface ComponentProps {
  item: IProduct;
}

export type IProps = Store.StoreState &
  typeof Store.actionsCreator &
  ComponentProps &
  RouteComponentProps<{}>;
