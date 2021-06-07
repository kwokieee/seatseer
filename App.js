import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import Start from './Start';

export default function App() {
  return (
    <Provider store={store}>
      <Start />
    </Provider>
  );
}