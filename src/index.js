import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shoplist from './Shoplist';
import registerServiceWorker from './registerServiceWorker';
import shop from './shop.svg';


ReactDOM.render(<Shoplist 
    title="Fancy shopping list" 
    src={shop}
    numbers = {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}/>, document.getElementById('root'));
registerServiceWorker();
