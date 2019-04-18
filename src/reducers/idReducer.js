import { MAIN_MENU_ID, SUBMENU_ID } from "../actions/types";

const INITIAL_STATE = {
  params: '',
  menuId: null,
  submenuId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAIN_MENU_ID:
      return {...state, menuId: action.payload - 1};
    case SUBMENU_ID:
      return {...state, submenuId: action.payload }
    default:
      return state;
  }
};
