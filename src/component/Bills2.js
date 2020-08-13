import React, { Component } from "react";

class Bills2 extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    
  }
  render() {

    return (<div style={{margin:"2%"}} >
    <h5>Documents and Bills</h5>
    {/* <div > */}
    <div className="table-responsive">
  <table  className="table">
  <thead>
    <tr>
      <th >Type</th>
      <th >Date</th>
      <th >Bill Number</th>
      <th  className="hidden-xs hidden-sm">Amount</th>
      <th  className="hidden-xs hidden-sm">Upload   Bill</th>
      <th className="hidden-xs hidden-sm">upload Prescription</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><select>
    <option value="own">doc1</option>
    <option value="corp">doc2</option>
    <option value="Both">doc3</option>
  </select></th>
      <td> <input type="date"placeholder="MM/DD/YYYY"onfocus="(this.type='date')" /></td>
      <td> <input type="text"/></td> 
      <td className="hidden-xs hidden-sm"> <input type="text"  /></td>
      <td className="hidden-xs hidden-sm"> <input type="file" id="imageFile" capture="environment" accept="image/*"></input></td>
      <td className="hidden-xs hidden-sm"> <input type="file" id="imageFile" capture="environment" accept="image/*"></input></td>
    </tr></tbody>
</table></div>
    </div>)
}

}



export default Bills2