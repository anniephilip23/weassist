import React from 'react';
import './App.css';
import LoginForm from "./component/LoginForm"
import Claimform from "./component/Claimform"
import Login from './component/Login';
import Screenmain from './component/Screenmain';
import Screen1 from "./component/Screen1"
import Screen2 from "./component/Screen2"
import Screen6 from "./component/Screen6"
import Home from "./component/Home"
import BillDT from "./component/BillDT"
import DT1 from "./component/DT1"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">

      <Home />
      {/* <BillDT/> */}
      {/* <DT1/> */}
{/* 
<Router>
       <div id="router">
        <nav>
          <ul>
            <li>
              <Link to="/screen1" style={{color: "blue",fontSize: "5px", fontWeight:"bold", textDecoration : "none"}}>Home</Link>
            </li>
            <li>
              <Link to="/screen2" style={{color: "blue",fontSize: "5px", fontWeight:"bold",textDecoration : "none"}}>About</Link>
            </li>
            <li>
              <Link to="/login" style={{color:"blue",fontSize: "5px", fontWeight:"bold", textDecoration : "none"}}>LogIn</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route path="/screen2">
            <Screen2 />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/screen1">
            <Screen1 />
          </Route>
        </Switch>
     
    
    </Router> */}



      {/* <Login/> */}
     {/* <Claimform />  */}
     {/* <Screenmain/> */}
     {/* <Screen2/> */}
     {/* <Screen1/> */}
     {/* <Screen6/> */}
    </div>
  );
}

export default App;
