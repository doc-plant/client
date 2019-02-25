import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

// Reducers
import user from '../reduser/user'
import content from '../reduser/content'

const RootReducers = combineReducers({user, content})
const store = createStore(RootReducers, {}, 
  applyMiddleware(thunk)
  );
export default store