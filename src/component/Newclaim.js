import React, { Component } from "react"

class  Newclaim extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
     
  }


  render() {

  return  (
<div style ={{margin:"2%"}}>
<div className ="row">
  <div className ="col-md-6" style ={{display: "flex",justifyContent:"space-around" , marginBottom:"1%"}}>
  <button style ={{ padding: "0%",  }}>Pre&Post</button>
  {/* </div> */}
  {/* /<div className ="col-md-3" style ={{textAlign:"center" , marginBottom:"1%"}}> */}
  <button style ={{ padding: "1%", width:"20%"}}> Main</button></div>


  <div className ="col-md-6" style ={{display: "flex",justifyContent:"space-around" , marginBottom:"1%"}} >
  <button style ={{ padding: "1%", }} >Rejection</button>
  {/* </div>
  <div className ="col-md-3" > */}
  <button style ={{ padding: "1%", width:"20%"}}>Others</button></div>
  </div>
</div>

//   <div className ="row">
//     <div className ="row">
//   <div className="radio col-md-6" style ={{textAlign: "center"}}>
//     <label >
//       <input type="radio" value="pp"  name ="typ" defaultChecked={true} style={{paddingRight:"2%"}} />
//       Pre and Post
//     </label>
//   </div>
//   <div className="radio col-md-6" style ={{textAlign: "center"}}>
//     <label >
//       <input type="radio" value="main" name ="typ" onChange={this.handleCorpChange} />
//       Main
//     </label>
//   </div>
//   </div>
//   <div className ="row">
//   <div className="radio col-md-6" style ={{textAlign: "center"}}>
//     <label>
//       <input type="radio" value="rej" name ="typ" onChange={this.handleBothChange} />
//       Rejection
//     </label>
//   </div>
//   <div className="radio col-md-6" style ={{textAlign: "center"}}>
//     <label  >
//       <input type="radio" value="oth" name ="typ" onChange={this.handleBothChange} />
//       Others
//     </label>
//   </div>
//  </div>
  
//  </div>
  
  
  
  
  
  
  
  
  
  
//   <div class="row" style={{marginTop:"2%",marginBottom:"2%"}}>
// <div class="checkbox col-md-2"></div>
// <div class="checkbox col-md-2" style={{marginLeft:"2%"}}>
// <input   type="checkbox" value=""/>
//   <label style ={{marginLeft:"3%"}}>Pre and Post</label>
// </div>
// <div class="checkbox col-md-2" style={{marginLeft:"2%"}}>
//   <input type="checkbox" value="" />
//   <label style ={{marginLeft:"3%"}}>Main</label>
//   </div>

// <div class="checkbox col-md-2" style={{marginLeft:"2%"}}>
// <input type="checkbox" value="" />
//   <label style ={{marginLeft:"3%",}}>Rejection</label>
// </div>
// <div class="checkbox col-md-2" style={{marginLeft:"2%"}}>
// <input type="checkbox" value="" />
//   <label style ={{marginLeft:"3%",}}>Others</label>
// </div>
// <div class="checkbox col-md-2"></div>
// </div>
      )}
  }


export default Newclaim