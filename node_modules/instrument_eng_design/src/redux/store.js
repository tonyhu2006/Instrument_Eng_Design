 // redux/store.js
 import { createStore, applyMiddleware, combineReducers } from 'redux';
 import thunk from 'redux-thunk';
 import userReducer from './reducers/userReducer';
 // 导入其他reducers...

 const rootReducer = combineReducers({
   user: userReducer,
   // 其他reducers...
 });

 const store = createStore(rootReducer, applyMiddleware(thunk));

 export default store;
 