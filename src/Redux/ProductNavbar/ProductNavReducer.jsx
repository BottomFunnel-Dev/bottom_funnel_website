import { MOUNT_NAV, UNMOUNT_NAV } from "./ProductNavAction";

const initialStore = {
  navMount: false,
};

export const mountNavbarReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case MOUNT_NAV:
      return {
        navMount: true,
      };
    case UNMOUNT_NAV:
        return{
            navMount: false,
        }

    default:
      return store;
  }
};
