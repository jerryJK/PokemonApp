import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import styles from './index.css';
import App from './components/App';


const store = createStore(reducer, applyMiddleware(thunk));


document.addEventListener('DOMContentLoaded', function(e) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
        document.getElementById('root')
      )
});
