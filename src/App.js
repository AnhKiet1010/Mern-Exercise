import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Menu from "./components/Menu";
import Book from "./components/Book";
import Index from './components/Index';
import Login from './components/Login';
import Create from './components/Create';

function App() {
  return (
      <Router>
        <div className="App">
          <Menu />
          <Route path='/' exact component={Index} />
          <Route path='/login' exact component={Login} />
          <Route path='/book' exact component={Book} />
          <Route path='/create' exact component={Create} />
        </div>
      </Router>
  );
}

export default App;
