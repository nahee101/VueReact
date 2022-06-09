import React from 'react';
/* redux의 store 작성 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/* redux의 값을 확인하기 위한 dev 툴 / 크롬확장앱도 설치해야 함 */
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rooteReducer from './modules';

const store = createStore(rooteReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> {/* 만들었던 스토어와 연결 */}
      <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
