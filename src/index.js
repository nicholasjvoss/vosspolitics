import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './App.scss';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
 <Routes />, document.getElementById('root')
);

registerServiceWorker();
