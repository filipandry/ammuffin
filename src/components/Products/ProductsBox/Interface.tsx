import * as Store from "../../../store/Store";
import { RouteComponentProps } from "react-router";

// interface IProps {
//   items: string[];
// }

export type IProps = Store.StoreState &
  typeof Store.actionsCreator &
  RouteComponentProps<{}>;

// export { IProps };
