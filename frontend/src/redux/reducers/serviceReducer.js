import {
  SERVICE_FAIL,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
} from '../constants/serviceConstant';

const initialState = {
  loading: false,
  services: [],
  error: '',
};

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
      };

    case SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        services: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
