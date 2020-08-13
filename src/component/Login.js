import React, { Component } from "react"
import Header from "./Header"
import Loginform from "./LoginForm"
import "./LoginForm.css"
import  Register from "./Register"


class Login extends Component{
    render(){

        return(<div><Header/>
          <Loginform/>
        </div>)
    }

}



export default Login