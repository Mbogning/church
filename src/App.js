import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/admin/header/Header';
import Sidebar from './components/admin/sidebar/Sidebar';


const App = () => {
  return (
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />

          </div>
        </div>

      </div>
  )
}

export default App
