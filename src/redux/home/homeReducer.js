import {
  FETCH_HOME_REQUEST,
  FETCH_HOME_REQUEST_SUCCESS,
  FETCH_HOME_REQUEST_FAIL,
} from "./homeTypes";

export const initialState = {
  loading: false,
  sections: [],
  error: "",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HOME_REQUEST_SUCCESS:
      return {
        ...state,
        sections: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_HOME_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        sections: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
