import React, { Component } from "react";


class Register extends Component{
    constructor(props){
        super(props)
        this.state={name:""}
     }
    
     nameChange =(event)=>{
         this.setState({name : event.target.value}) 
    }
    
    render(){

        return(<div><form>
            <div id ="div1"><label class ="label">Name</label><br />
            <input type="txt" placeholder ="Enter your Name" value ={this.state.name} onChange={this.nameChange}></input></div>
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
        </div>)
    }


}


export default Register