import React, { Component } from "react";

class Medical extends Component {
  constructor(props) {
    super(props)
    this.state = { 
  }
  }


  render() {

    return (
        <div  style={{margin:"2%"}}>
        <h5>Medical Particulars </h5>
        <div className="row"style={{margin:"0.5%"}}>
        <div className="row" style={{marginBottom: "1%", marginTop:"1%"}}>
      <div className="col-md-5" style={{ display: "flex", alignItems: "center" }}>
        <label for="Adddate">Admission Date And Time:</label>
      </div>
      <div className="col-md-6">
        <input type="datetime-local" className="form-control" id="Adddate"  style={{marginTop :"0px"}} />
      </div>
      </div>
      <div className="row" style={{marginBottom: "1%", marginTop:"1%", }}>
      <div className="col-md-5" style={{ display: "flex", alignItems: "center" }}>
        <label for="OI">Discharge Date And Time  :  </label>
      </div>
      <div className="col-md-6">
        <input type="datetime-local" className="form-control" id="OI" placeholder="Discharge Date And Time" style={{marginTop :"0px"}} />
      </div>
      </div>
      </div>
</div>
    )
}
}


export default Medical