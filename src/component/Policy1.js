import React, { Component } from "react";

class Policy1 extends Component {
  constructor(props) {
    super(props)
 
  }

  render() {

    return (<div>
        <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
              <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
                <label for="insur">Insurance Company :</label>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="insur" placeholder="Insurance Company" style={{marginTop :"0px"}} />
              </div>
              </div>
        
              <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
              <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
                <label for="pn">Product Name :</label>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="pn" placeholder="Product Name" style={{marginTop :"0px"}} />
              </div>
              </div>
              <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
              <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
                <label for="OI">Other Insurance Coverage  :   (Optional)</label>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="OI" placeholder="Other Insurance Coverage" style={{marginTop :"0px"}} />
              </div>
              </div>
              <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
              <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
                <label for="tpa">TPA Name :</label>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="tpa" placeholder="TPA Name" style={{marginTop :"0px"}} />
              </div>
              </div>
        
              <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
              <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
                <label for="hospnam">Hospital Name :</label>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="hospnam" placeholder="Hospital Name " style={{marginTop :"0px"}} />
              </div>
              </div>
        
              <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
              <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
                <label for="mem">Member ID :</label>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" id="mem" placeholder="Member ID" style={{marginTop :"0px"}} />
              </div>
              </div> </div>)
}

}



export default Policy1