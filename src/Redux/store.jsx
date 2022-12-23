import { createStore, combineReducers } from "redux";

import { NavbarReducer } from "./Navbar/NavbarReducer";
import { mountNavbarReducer } from "./ProductNavbar/ProductNavReducer";


const rootReducer = combineReducers({
  navbar: NavbarReducer,
  mountNav: mountNavbarReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
