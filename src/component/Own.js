import React, { Component } from "react";

class Own extends Component {
  constructor(props) {
    super(props)
 
  }

  render() {

    return (<div>
       <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
      <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
        <label for="cus">Customer ID :</label>
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" id="cus" placeholder="Customer ID" style={{marginTop :"0px"}} />
      </div>
      </div>
      <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
      <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
        <label for="pn">Policy Number :</label>
      </div>
      <div className="col-md-6">
        <input type="text" className="form-control" id="pn" placeholder="Policy Number" style={{marginTop :"0px"}} />
      </div>
      </div> 

      <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
      <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
        <label for="card">E-Card/Health Card :</label>
      </div>
      <div className="col-md-6">
        <input type="file" className="form-control" id="card"  style={{marginTop :"0px"}} />
      </div>
      </div> 
      <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
      <div className="col-md-4" style={{ display: "flex", alignItems: "center" }}>
        <label for="pc">Policy Copy :</label>
      </div>
      <div className="col-md-6">
        <input type="file" className="form-control" id="pc" style={{marginTop :"0px"}} />
      </div>
      </div> 
    
        </div>)
}

}



export default Own