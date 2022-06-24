import {
  SERVICE_CREATE_FAIL,
  SERVICE_CREATE_REQUEST,
  SERVICE_CREATE_SUCCESS,
  SERVICE_DELETE_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_FAIL,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SERVICE_UPDATE_FAIL,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
  SINGLE_SERVICE_FAIL,
  SINGLE_SERVICE_REQUEST,
  SINGLE_SERVICE_SUCCESS,
} from '../constants/serviceConstant';

const initialServiceState = {
  loading: false,
  services: [],
  service: {},
  error: '',
};

const initialCreateServiceState = {
  loading: false,
  service: {},
  error: '',
};

export const serviceReducer = (state = initialServiceState, action) => {
  switch (action.type) {
    case SERVICE_UPDATE_REQUEST:
    case SERVICE_DELETE_REQUEST:
    case SINGLE_SERVICE_REQUEST:
    case SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SERVICE_DELETE_SUCCESS:
      return {
        ...state,
        loading: true,
      };

    case SINGLE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case SERVICE_UPDATE_SUCCESS:
    case SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
      };

    case SINGLE_SERVICE_FAIL:
    case SERVICE_UPDATE_FAIL:
    case SERVICE_DELETE_FAIL:
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
