import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './header/Header';

const rootRoutes = () => {
    return (
        <main>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <div class="layout-page">
                        <Header />
                    </div>

                </div>
            </div>
        </main>
    )

}
export default rootRoutes