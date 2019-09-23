import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import symbolTypeReducer from './symbolTypeReducer';
import codeStringReducer from './codeStringReducer';

const createRootReducer = (history) => combineReducers({
    symbolType: symbolTypeReducer,
    codeString: codeStringReducer,
    router: connectRouter(history)
})
export default createRootReducer