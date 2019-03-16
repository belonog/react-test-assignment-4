import axios from 'axios';

const ONE_MIN = 1000 * 60;
export const HOUSES_REQUEST = 'HOUSES_REQUEST';
export const HOUSES_RESPONSE = 'HOUSES_RESPONSE';


const getHouses = () => dispatch => {
  dispatch({type: HOUSES_REQUEST});

  axios.get('https://demo4452328.mockable.io/properties')
    .then(res => {
      dispatch({
        type: HOUSES_RESPONSE,
        payload: res.data.data
      });
    })
    .catch(() => dispatch({type: HOUSES_RESPONSE}));

};

const shouldFetchItems = state => {
  const { isFetching, list, didInvalidate, lastUpdate } = state;
  if (isFetching) {
    return false;
  } else if (!list) {
    return true;
  } else if (didInvalidate || lastUpdate < (Date.now() - ONE_MIN)) {
    return true;
  }

  return false;
}

export const updateHousesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchItems(getState().houses)) {
    dispatch(getHouses());
  }
};


const initialState = {
  lastUpdate: null,
  list: [],
  isFetching: false,
  didInvalidate: true,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case HOUSES_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case HOUSES_RESPONSE: {
      return {
        ...state,
        list: payload,
        isFetching: false,
        lastUpdate: Date.now(),
        didInvalidate: false
      }
    }
    default:
      return state;
  }
};