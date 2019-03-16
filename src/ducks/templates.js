import axios from 'axios';

const TEN_MIN = 1000 * 60 * 10;

const TEMPLATES_REQUEST = 'TEMPLATES_REQUEST';
const TEMPLATES_RESPONSE = 'TEMPLATES_RESPONSE';
const SET_TEMPLATE = 'SET_TEMPLATE';


const getTemplates = () => dispatch => {
  dispatch({type: TEMPLATES_REQUEST});

  axios.get('https://demo4452328.mockable.io/templates')
    .then(res => {
      dispatch({
        type: TEMPLATES_RESPONSE,
        payload: res.data
      });
    })
    .catch(() => dispatch({type: TEMPLATES_RESPONSE}));

};

const shouldFetchItems = state => {
  const { isFetching, list, didInvalidate, lastUpdate } = state;
  if (isFetching) {
    return false;
  } else if (!list) {
    return true;
  } else if (didInvalidate || lastUpdate < (Date.now() - TEN_MIN)) {
    return true;
  }

  return false;
}

export const updateTemplatesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchItems(getState().templates)) {
    dispatch(getTemplates());
  }
};

export const setTemplate = id => dispatch => {
  dispatch({
    type: SET_TEMPLATE,
    payload: id,
  });
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
    case TEMPLATES_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case TEMPLATES_RESPONSE: {
      return {
        ...state,
        list: payload,
        selected: payload[0].id,
        isFetching: false,
        lastUpdate: Date.now(),
        didInvalidate: false
      }
    }
    case SET_TEMPLATE: {
      return {
        ...state,
        selected: payload,
      };
    }
    default:
      return state;
  }
};