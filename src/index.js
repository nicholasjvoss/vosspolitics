import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './pages/common/index.scss';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
 <Routes />, document.getElementById('root')
);

registerServiceWorker();
