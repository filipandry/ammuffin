// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// import { connectRouter, routerMiddleware } from "connected-react-router";
// import { History } from "history";
// import { ApplicationState, reducers } from "./";

// export const configureStore = (
//   history: History,
//   initialState?: ApplicationState
// ) => {
//   const middleware = [thunk, routerMiddleware(history)];

//   const rootReducer = combineReducers({
//     ...reducers,
//     router: connectRouter(history)
//   });

//   const enhancers = [];
//   const windowIfDefined =
//     typeof window === "undefined" ? null : (window as any);
//   if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
//     enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
//   }

//   return createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(...middleware), ...enhancers)
//   );
// };

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Store";

export const store = configureStore({
  reducer: reducer
});
