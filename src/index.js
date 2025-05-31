import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducers from './views/Strore/reducers/rootReducers';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
                <Route path='/user' element={<User/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        
        </Route>


      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
