import React, { Component } from "react";
import "../../fontawe";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../Elements/NotFound/NotFound";
import Header from "../Elements/Header/Header";
import Movie from "../Movie/Movie";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:movieId" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
