import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Plants } from './components/Plants';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const plantData = {
  wateringStatus: "On"
};

const waterStatus = (state, action) => {
  switch(action.type){
    case 'On':
      return {wateringStatus: state.wateringStatus};

    case 'Off':
      return {wateringStatus: state.wateringStatus};

    default: {
      return state;
    }
  }
}
const store = createStore(waterStatus);

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const App = () => (

  <Provider store={ store }>
    <Plants></Plants>
  </Provider>
);

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
