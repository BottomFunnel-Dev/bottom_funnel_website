import { CHANGE_COLOR } from "./NavbarAction";

const initialStore = {
  color: "white",
};

export const NavbarReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case CHANGE_COLOR:
      return {
        color: payload,
      };

    default:
      return store;
  }
};
