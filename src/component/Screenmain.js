import React, { Component } from "react";
import Welcome from "./WelcomeUser"
import Datatab from "./Datatab";
import Datatab2 from "./Datatab2";
class Screenmain extends Component {
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
           <div className ="md-12">
             <Datatab/>
             <Datatab2/>
             {/* <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">Claim Ref. Number</th>
      <th scope="col">Hospital</th>
      <th scope="col">Type</th>
      <th scope="col">Status
</th>
<th scope="col">Invoice
</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td> 324234234</td>
      <td>ABC Hospital</td>
      
      <td>Pre and Post</td>
      <td> WIP</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td> 224234234</td>
      <td>ABC Hospital</td>
      
      <td>Pre and Post</td>
      <td> Submitted
</td>
      <td></td>
    </tr>
    </tbody>
</table></div> */}
</div>
           </div>

           {/* <div className="col-md-12" >
               <h5> No Claim Details</h5>
           </div>
           <div className="col-md-12" style ={{borderStyle: "groove", textAlign:"center"}}>
               No Claim Details data
           </div> */}
           {/* <div className="col-md-12" >
               <h5> Claim Details</h5>
           </div> */}
           <div className="col-md-12" style ={{borderStyle: "groove", textAlign:"center", marginTop:"6%"}}>
               Claim Details data
           </div>
            </div>
    )
}
}


export default Screenmain