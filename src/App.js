import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import AddBooks from './Components/AddBooks/AddBooks';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CheckOut from './Components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import Admin from './Components/Admin/Admin';
export const IdContext = createContext()
function App() {

  return (
    <div className="App">

      <Router>
        <Header></Header>
       <Switch>
        <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route path="/addBooks"><AddBooks></AddBooks></Route>
          <Route path='/book/:id'>
            <CheckOut></CheckOut>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path="*"><h3 className="text-center text-danger">404-Link not found</h3></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
