import React, { Component } from "react";
import Welcome from "./WelcomeUser"
import Datatab from "./Datatab";
import Datatab3 from "./Datatab3";
class Screen6 extends Component {
  constructor(props) {
    super(props)
    this.state = { 
  }
  }


  render() {

    return (


        <div>
            <Welcome/>
           <div className="row-md-12" style={{marginBottom: "3%", marginTop:"3%" ,marginRight:"2%", textAlign:"end "}}>
                <button onClick ={()=>this.addPolicy1()} >Add New</button></div>
                
           <div className="row-md-12" style={{marginBottom: "1%", marginTop:"1%" , textAlign:"end "}}>
          
             <Datatab3/>

             
           </div>

           <div className="col-md-12" style ={{borderStyle: "groove", textAlign:"center", marginTop:"6%"}}>
               Claim Details data
           </div>
            </div>
    )
}
}


export default Screen6