import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {router} from './Router.jsx'
import store from './store.js';
import { Provider } from 'react-redux';
import {RouterProvider} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
