import React, { Component } from "react";

class Additinal extends Component {
  constructor(props) {
    super(props)
    this.state = { 
  }
  }


  render() {

    return (
        <div style={{margin:"2%"}}>
        <h5>Additional Documents</h5>
        <div className="md-9">
  <table class="table table-bordered table-striped col-md-3">
       
  <thead>
    <tr>
      <th className=" tab">Type</th>
      <th className=" tab">Upload</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tab1"  scope="row"><select>
    <option value="own">doc1</option>
    <option value="corp">doc2</option>
    <option value="Both">doc3</option>
  </select></td>
      <td className="tab1"> <input type="file" id="imageFile" capture="environment" accept="image/*"></input></td>
    </tr></tbody>
</table></div>
     
      </div>
    )
}
}


export default Additinal