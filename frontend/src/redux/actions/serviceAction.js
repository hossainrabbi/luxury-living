import axios from 'axios';
import {
  SERVICE_FAIL,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
} from '../constants/serviceConstant';

export const getService = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_REQUEST });

    const { data } = await axios.get('http://localhost:8080/api/v1/services');

    dispatch({ type: SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_FAIL, payload: error });
  }
};
