import { Route, Switch } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { DashboardPage } from "../DashboardPage";
import { SettingsPage } from "../SettingsPage";
import { PrivateRoute } from "../../components/PrivateRoutes";

import React from "react";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact to="/login" path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <Route path="/dashboard/settings">
          <SettingsPage />
        </Route>
      </Switch>
    </div>
  );
};
