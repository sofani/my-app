import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/Header';
import Footer from './js/Footer';
import registerServiceWorker from './js/registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.render(<Footer/>, document.getElementById('rootFooter'));
registerServiceWorker();
