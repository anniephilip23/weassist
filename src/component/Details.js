import React, { Component } from "react";



class Loginform extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
     
  }


  render() {

    return (<div style={{margin:"2%"}}>
    <div class="row">
      <div class="col-md-1" style={{ display: "flex", alignItems: "center" }}>
        <label for="name">Name :</label>
      </div>
      <div class="col-md-4">
        <input type="text" class="form-control" id="name" placeholder="Name" style={{marginTop :"0px", marginBottom: "4%"}} />
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-1" style={{ display: "flex", alignItems: "center" }}> <label for="phone">Mobile :</label></div>
      <div class="col-md-4 ">
        <input type="text" class="form-control" id="phone" placeholder="Mobile" style={{marginTop :"0px", marginBottom: "4%"}}/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-1" style={{ display: "flex", alignItems: "center" }}>
        <label for="mail">Email ID :</label>
      </div>
      <div class="col-md-4">
        <input type="text" class="form-control" id="mail" placeholder="Mail ID" style={{marginTop :"0px", marginBottom: "4%"}}/>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-1" style={{ display: "flex", alignItems: "center" }}> <label for="hosp">Hosp.Name :</label></div>
      <div class="col-md-4 ">
        <input type="text" class="form-control" id="hosp" placeholder="Hosp. Name" style={{marginTop :"0px", marginBottom: "4%"}}/>
      </div>
    </div>
  </div>)
  }

}



export default Loginform