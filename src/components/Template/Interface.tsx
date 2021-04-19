import * as Store from "../../store/Store";
import { RouteComponentProps } from "react-router";

interface ComponentProps {}

export type IProps = Store.StoreState &
  typeof Store.actionsCreator &
  ComponentProps &
  RouteComponentProps<{}>;
