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
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/ManageCheckOut/Orders';
import SignUp from './Components/SignUp/SignUp';
export const UserContext = createContext()
function App() {
   const [loggedInUser,setLoggedInUser] = useState({
     isSignIn:true
   })
  return (
    <div className="App">
       <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Header></Header>
       <Switch>
        <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <PrivateRoute  path="/addBooks"><AddBooks></AddBooks></PrivateRoute >
          <PrivateRoute  path='/book/:id'>
            <CheckOut></CheckOut>
          </PrivateRoute >
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/orders'>
            <Orders></Orders>
          </PrivateRoute>
          <Route path='/signin'>
            <LogIn></LogIn>
          </Route>
          <Route path='/signUp'>
            <SignUp></SignUp>
          </Route>
          <Route path="*"><h3 className="text-center text-danger">404-Link not found</h3></Route>
        </Switch>
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
