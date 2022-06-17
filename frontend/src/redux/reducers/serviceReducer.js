import {
  SERVICE_CREATE_FAIL,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_FAIL,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
} from '../constants/serviceConstant';

const initialServiceState = {
  loading: false,
  services: [],
  error: '',
};

const initialCreateServiceState = {
  loading: false,
  service: {},
  error: '',
};

export const serviceReducer = (state = initialServiceState, action) => {
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
        error: action.payload,
      };

    default:
      return state;
  }
};

export const serviceCreateReducer = (
  state = initialCreateServiceState,
  action
) => {
  switch (action.type) {
    case SERVICE_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SERVICE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case SERVICE_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
