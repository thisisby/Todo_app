import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import List from "./components/List";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import { DataProvider } from "./context/DataProvider";
import Home from "./pages/Home";
import Today from "./pages/Today";

const App = () => {
  return (
    <DataProvider>
      <div className="">
        <Header />
        <Sidebar />
        <Switch>
          <Route path={["/", "/Inbox"]} exact component={Home} />
          <Route path="/Today" component={Today} />
        </Switch>
      </div>
    </DataProvider>
  );
};

export default App;
