import { combineReducers } from 'redux';

import templatesReducer from '../ducks/templates';
import housesReducer from '../ducks/houses';


export default combineReducers({
  templates: templatesReducer,
  houses: housesReducer,
});
