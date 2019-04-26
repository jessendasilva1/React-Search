import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import NoMatch from './pages/nomatch/nomatch';
import SavedBooks from './pages/saved/savedBooks';
import Details from './pages/detail/detail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={SavedBooks} />
          <Route exact path="/books/:id" component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
