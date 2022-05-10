//引入react核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom'; // react 17 and before
// import {createRoot} from 'react-dom/client'; //react 18 (already updated to react 18 on 10/05/22)
import './index.css';
//引入App组件
import App from './App.jsx';
import './App.css';
// import {render} from '@testing-library/react';

//渲染App到页面
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App tab="home" />);

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);