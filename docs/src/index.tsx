import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// import Frogger from './components/frogger/frogger';
import MainPage from './components/Main/MainPage';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        {/* <Frogger /> */}
        {<MainPage />}
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
