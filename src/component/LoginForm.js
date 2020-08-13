import React, { Component } from "react";
import "./LoginForm.css"
import  Register from "./Register"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class Loginform extends Component{
    constructor(props){
        super(props)
        // this.state ={}
        this.state = {disply:[(<div class ="cont"><form>
        <div className="div3"><label class ="label">Phone Number</label><br />
        <input type="txt" placeholder ="10 digit Mobile Number" maxLength="10"></input></div>
        <div className="div2"><label class ="label">OTP</label><br />
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0" min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        </div>
       <div className="div2"> <input  id  ="submit" type="submit" value="Login" /></div>
    </form>
    <div className="div2">Don’t have an account?<button id ="but"onClick ={()=>this.signUp()} > Sign up</button></div>
    </div>)], name:""}


    }

    signUp(){
        this.setState({disply:[(<div><form>
            <div id ="div1"><label class ="label">Name</label><br />
            <input type="txt" placeholder ="Enter your Name"></input></div>
            <div className="div2"><label class ="label">Phone Number</label><br />
            <input type="txt" placeholder ="10 digit Mobile Number" maxLength="10"></input></div>
            <div className="div2"><label class ="label">OTP</label><br />
            <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
            <input className ="otp" type="txt" placeholder ="0" min ="0" max ="9" maxLength="1"></input>
            <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
            <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
            <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
            <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
            </div>
           <div className="div2"> <input  id  ="submit" type="submit" value="Register" /></div>
        </form>
        </div>)]})}

        

    nameChange =(event)=>{this.setState({name:event.target.value})}
    render(){

        return(<div>
            {/* <div class ="cont"><form>
        <div className="div3"><label class ="label">Phone Number</label><br />
        <input type="txt" placeholder ="10 digit Mobile Number" maxLength="10"></input></div>
        <div className="div2"><label class ="label">OTP</label><br />
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0" min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        <input className ="otp" type="txt" placeholder ="0"  min ="0" max ="9" maxLength="1"></input>
        </div>
       <div className="div2"> <input  id  ="submit" type="submit" value="Login" /></div>
    </form>
    <div className="div2">Don’t have an account?
    
    <Router>
         <nav><Link to="/reg">Sign up</Link></nav> 
    
    <Switch>
        <Route path="/reg" exact render={()=><Redirect to = "Register" />} >
           
           </Route>
          </Switch>
    </Router>
    {/* <button  id="but" onClick ={()=>this.signUp()} > Sign up</button> */}
    {/* </div>
    </div> */}
            
            {this.state.disply}


            </div>)
    }

}



export default Loginform