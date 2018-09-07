import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shoplist from './Shoplist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Shoplist title="Shopping list" />, document.getElementById('root'));
registerServiceWorker();
