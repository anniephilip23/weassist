import React, { Component } from "react"
import Logo from "./logo.png"
const WelcomeUser= ()=>
<div>
  <div className="row" style ={{backgroundImage:  "linear-gradient(to Right, rgb(218, 232, 250),rgb(5, 74, 163))"}} >
    <div className="col-md-6">
    <img src ={Logo} alt ="Logo" style ={{ maxWidth:"18%", margin:"1%"}} ></img>
    </div>
    <div className="col-md-4" style ={{textAlign:"end"}}>
        WelcomeUser
      <header/>
    </div>
  </div>
</div>


export default WelcomeUser