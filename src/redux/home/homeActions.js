import { getHomeSections } from "../../services/homeSectionsService";

import {
  FETCH_HOME_REQUEST,
  FETCH_HOME_REQUEST_SUCCESS,
  FETCH_HOME_REQUEST_FAIL,
} from "./homeTypes";

export const fetchHomeRequest = () => {
  return {
    type: FETCH_HOME_REQUEST,
  };
};

export const fetchHomeRequestSuccess = (products) => {
  return {
    type: FETCH_HOME_REQUEST_SUCCESS,
    payload: products,
  };
};

export const fetchHomeRequestFail = (error) => {
  return {
    type: FETCH_HOME_REQUEST_FAIL,
    payload: error,
  };
};

export const fetchSections = () => {
  return (dispatch) => {
    dispatch(fetchHomeRequest());

    try {
        const result = getHomeSections();

        if(result.length === 0)
            throw "Erro no serviço"

        dispatch(fetchHomeRequestSuccess(result));

    } catch (error) {
        console.error(error);
        dispatch(fetchHomeRequestFail(error));
    }
  };
};
