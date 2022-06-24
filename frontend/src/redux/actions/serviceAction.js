import axios from 'axios';
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

export const getService = () => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_REQUEST });

    const { data } = await axios.get('http://localhost:8080/api/v1/services');

    dispatch({ type: SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_FAIL, payload: error });
  }
};

export const createService = (post) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_CREATE_REQUEST });

    const { data } = await axios.post(
      'http://localhost:8080/api/v1/admin/service/new',
      post
    );

    dispatch({ type: SERVICE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_CREATE_FAIL, payload: error });
  }
};

export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DELETE_REQUEST });

    await axios.delete(`http://localhost:8080/api/v1/admin/service/${id}`);
    dispatch({ type: SERVICE_DELETE_SUCCESS });
  } catch (error) {
    dispatch({ type: SERVICE_DELETE_FAIL, payload: error });
  }
};

export const updateService = (id, updatePost) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_UPDATE_REQUEST });

    const { data } = await axios.put(
      `http://localhost:8080/api/v1/admin/service/${id}`,
      updatePost
    );

    dispatch({ type: SERVICE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SERVICE_UPDATE_FAIL, payload: error });
  }
};

export const getSingleService = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_SERVICE_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8080/api/v1/admin/service/${id}`
    );

    dispatch({ type: SINGLE_SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SINGLE_SERVICE_FAIL, payload: error });
  }
};
