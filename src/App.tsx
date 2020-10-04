import React, { FunctionComponent, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LayoutContainer from "layout";

const App: FunctionComponent = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <Switch>
          <Route path={["/signIn", "sign-in"]}>
            <LayoutContainer />
          </Route>
          <Route exact path={["", "/"]}>
            <LayoutContainer />
          </Route>
          <Route path="*">
            <div>
              <p>에러</p>
            </div>
          </Route>
        </Switch>
      </Router>
    </DndProvider>
  );
};

export default App;
