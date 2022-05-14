import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom' 
import ScrollToTop from './component/ScrollToTop';
import $ from 'jquery';



  ReactDOM.render(<BrowserRouter>
    <ScrollToTop />
   <App/>
   </BrowserRouter>
    , document.getElementById('root')
   );
