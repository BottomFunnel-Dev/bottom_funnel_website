import { createStore, combineReducers } from "redux";

import { NavbarReducer } from "./Navbar/NavbarReducer";

const rootReducer = combineReducers({
  navbar: NavbarReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
