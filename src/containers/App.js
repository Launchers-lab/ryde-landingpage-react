import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import * as classNames from "classnames/bind";

import Main from "./Main/Main";
import Survey from "./Survey/Survey";
import NotFound from "./NotFound/NotFound";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./App.scss";
const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx("App")}>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/survey" exact component={Survey} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
