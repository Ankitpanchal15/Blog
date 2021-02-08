import "./App.css";
import React, { useState } from "react";
import Header from "./component/Header";
import Hero from './component/Hero';
import BlogList from "./component/BlogList";
import BlogPost from "./component/BlogPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from './component/CreateBlog';

function App() {
  return (
    <>
   
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero/>
            <BlogList />
          </Route>
          <Route path="/blog/:id">
            <BlogPost />
          </Route>
          <Route path='/create' >
            <CreateBlog/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
