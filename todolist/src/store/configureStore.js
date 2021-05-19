import { createStore,applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import throttle from 'lodash/throttle'
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState();
  //const persistedState = composeWithDevTools(applyMiddleware(thunkMiddleware))

  //if(persistedState===undefined){
   // persistedState = composeWithDevTools(applyMiddleware(thunkMiddleware));
    
  //}
 
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    

  store.subscribe(throttle(() => {

    saveState({
      todos: store.getState().todos,
      visibilityFilter: store.getState().visibilityFilter
    })
  }, 1000))

  return store;
}

export default configureStore;