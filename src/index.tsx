import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeroPage from './Views/HeroPage';
import {Provider} from 'react-redux'
import {configureStore} from "@reduxjs/toolkit";
import {HeroSlice} from "./HeroSlice";


export const store = configureStore({
    reducer: {
        hero: HeroSlice.reducer,
    },
})

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/*" element={<HeroPage/>}/>
                </Routes>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
