import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'tachyons'
import App from '../src/containers/App';
import './index.css';
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

