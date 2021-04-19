import * as Store from "../../../store/Store";
import { RouteComponentProps } from "react-router";

interface ComponentProps {
  image: string | "*.png";
}

export type IProps = Store.StoreState &
  typeof Store.actionsCreator &
  ComponentProps &
  RouteComponentProps<{}>;
