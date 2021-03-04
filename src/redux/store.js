import { createStore } from 'redux';
//import rootReducer  from './rootReducer'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer);

export default store;