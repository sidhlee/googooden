import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);

serviceWorker.register();
