import React from 'react'; //UI Library
import ReactDOM from 'react-dom'; // React를 웹사이트에 출력(render)하는 걸 도와주는 모델
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // 1개(App)의 component를 index.html에서 출력(render)
registerServiceWorker();
