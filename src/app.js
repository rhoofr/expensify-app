import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 6500,
    createdAt: 1595900000000,
  })
);
store.dispatch(
  addExpense({
    description: 'Gas Bill',
    amount: 4444,
    createdAt: 1595952516790,
  })
);
store.dispatch(
  addExpense({ description: 'Rent', amount: 109500, createdAt: 1595952516777 })
);
// store.dispatch(setTextFilter('bill'));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
