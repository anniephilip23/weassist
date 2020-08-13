import React, { Component } from "react";

class Bills extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       students: [
          { Type:" ", Date: '', BillNo:" ", Amount: '',Bill:" ",Prescription:" " },
         
       ]
    }
 }
 renderTableData() {
   return this.state.students.map((student, index) => {
      const { id, name, age, email } = student //destructuring
      return (<div  style={{display:"flex",flexDirection:"row"}}> 
         <div className="col-1" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold", textAlign:"center",backgroundColor:"rgb(236, 239, 241)"}}><select style={{width:"50%",marginTop:"5%"}}>
             <option value="own">doc1</option>
             <option value="corp">doc2</option>
            <option value="Both">doc3</option>
       </select></div>
            
            <div className="col-2 tab1"style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center", backgroundColor:"rgb(236, 239, 241)"}}>
              <input style={{margin:"0" , height: "100% !important", display: "inline-block", width:"100%",borderRadius: "0 !important",border: "none"}}type="date"></input>
            </div>
            <div className="col-1 tab1" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center",backgroundColor:"rgb(236, 239, 241)"}}>
            <input style={{margin:"0" , height: "100% !important", display: "inline-block", width:"100%",borderRadius: "0 !important",border: "none"}}type="text"></input>
            </div>
            <div className="col-2 tab1" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center",backgroundColor:"rgb(236, 239, 241)"}}>
            <input style={{margin:"0" , height: "100% !important", display: "inline-block", width:"100%",borderRadius: "0 !important",border: "none"}}type="text"></input>
            </div>
            <div className="col-3 tab1" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center",backgroundColor:"rgb(236, 239, 241)"}}>
            <input style={{margin:"0" , height: "100% !important", display: "inline-block", width:"100%",borderRadius: "0 !important",border: "none",backgroundColor:"rgb(236, 239, 241)"}}type="file"></input>
            </div>
            <div className="col-3 tab1" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center",backgroundColor:"rgb(236, 239, 241)"}}>
            <input style={{margin:"0" , height: "100% !important", display: "inline-block", width:"100%",borderRadius: "0 !important",border: "none"}}type="file"></input>
            </div>
            </div>
      )
   })
}

renderTableHeader() {
  
  
     return ( <div style={{display:"flex",flexDirection:"row"}}>
     <div  className="col-1 tab" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center", display: "inline-block"}}>Type</div>
     <div className="col-2 tab" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center", display: "inline-block"}}>Date</div>
     <div className="col-1 tab" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center"}}>Bill No</div>
     <div className="col-2 tab" style={{border:"1px solid gray", padding:"1%",fontWeight:"bold",textAlign:"center"}}>Amount</div>
     <div className="col-3 tab" style={{border:"1px solid gray" ,padding:"1%",fontWeight:"bold",textAlign:"center"}}>Bills</div>
     <div className="col-3 tab" style={{border:"1px solid gray", padding:"1%", fontWeight:"bold",textAlign:"center", display: "inline-block"}}>Prescription</div>
     </div>
     )
}


// renderTableHeader() {
//  let header = Object.keys(this.state.students[0])
//  return header.map((key, index) => {
//     return <th key={index}>{key.toUpperCase()}</th>
//  })
// }

render() {
 return (
  <div style={{margin:"2%"}} >
       <h5>Documents and Bills</h5>
      {this.renderTableHeader()}
       {this.renderTableData()}
    </div>
      

    )
 }
}























//   render() {

//     return (<div style={{margin:"2%"}} >
//     <h5>Documents and Bills</h5>
//     <div>
//   <table style={{maxWidth: "50vw"}} className="center">
//   <thead>
//     <tr>
//       <th >Type</th>
//       <th >Date</th>
//       <th >Bill Number</th>
//       <th >Amount</th>
//       <th  >Upload   Bill</th>
//       <th >upload Prescription</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr style={{maxWidth: "40vw"}}>
//       <th scope="row"><select>
//     <option value="own">doc1</option>
//     <option value="corp">doc2</option>
//     <option value="Both">doc3</option>
//   </select></th>
//       <td> <input type="date"placeholder="MM/DD/YYYY"onfocus="(this.type='date')" /></td>
//       <td> <input type="text"/></td> 
//       <td> <input type="text"  /></td>
//       <td> <input type="file" id="imageFile" capture="environment" accept="image/*"></input></td>
//       <td> <input type="file" id="imageFile" capture="environment" accept="image/*"></input></td>
//     </tr></tbody>
// </table></div>
//     </div>)
// }

// }



export default Bills