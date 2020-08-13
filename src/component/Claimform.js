import React, { Component } from "react";
import Welcome from "./WelcomeUser"
import Newclaim from "./Newclaim"
import Details from "./Details"
import Policy from "./Policy"
import Medical from "./Medical"
import Bills from "./Bills"
import Bills2 from "./Bills2"
import Additinal from "./Additinal"

class Claimform extends Component{
    constructor(props){
        super(props)
    
 }

    
      
 render(){

        return(<div>
            <Welcome/>
            <form><Newclaim/>
            <Details/>
            <Policy/>
            <Medical/>
            <Bills/>
            {/* <Bills2/> */}
            <Additinal/>
            <button>Submit</button>
            </form>
            
            </div>)
    }


}


export default Claimform