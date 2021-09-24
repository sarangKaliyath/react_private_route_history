import React from 'react';
import { PrivateRoute } from "../components/PrivateRoutes";
import { Route, Link } from 'react-router-dom';
import { SettingsPage } from './SettingsPage';


export const DashboardPage = () => {


    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <Link to="dashboard/settings">Settings</Link>
        </div>
    )
}
