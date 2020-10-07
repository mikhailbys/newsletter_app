import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from "redux";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import {initialParams, loginReducer} from "./store/reducers/loginReducer";

const rootReducer = combineReducers({
    loginReducer: loginReducer
});

// @ts-ignore
const store = createStore(rootReducer, initialParams);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
          <App />
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
