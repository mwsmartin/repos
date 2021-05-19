import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';

import './styles.css';
import App from './components/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { addTodoComplete,addTodo } from './store/actions/index'


const THEME = createMuiTheme({
  typography: {
   "fontFamily": `-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji`,
  },
  overrides: {
    MuiButton: {
      root: {
        margin: '5px 0 5px',
      },
    },
  },
});

const store = configureStore();

if (localStorage.getItem(undefined) === null) {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => jsonFetchCallback({ responseJson }));
}
var jsonFetchCallback = input =>  {
  for(let i = 0 ; i< 10;i++){
    if(input['responseJson'][i]){
      if(input['responseJson'][i].id && input['responseJson'][i].title && input['responseJson'][i].hasOwnProperty("completed")){
        if(input['responseJson'][i].completed==true)
        store.dispatch(addTodoComplete(input['responseJson'][i].title));
        else
        store.dispatch(addTodo(input['responseJson'][i].title));

      }
    }
  }
}


ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

