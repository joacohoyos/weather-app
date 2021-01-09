import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import weatherReducer from './store/reducers/weather'
import forecastReducer from './store/reducers/forecast'
import locationReducer from './store/reducers/location'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import watchSagas from './store/sagas'

const sagaMiddleware = createSagaMiddleware()


const composeEnhancers =
process.env.NODE_ENV === "development" ?  (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose : null || compose

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  location: locationReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(watchSagas)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
