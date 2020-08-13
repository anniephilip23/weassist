import React, { Component } from "react";
import Policy1 from "./Policy1"
import Own from "./Own"
import Corp from "./Corp"

class Policy extends Component {
  constructor(props) {
    super(props)
    this.state= {value:"own",value1:"own", div1 :"",div2:""  ,buttn2 :[(<button onClick ={()=>this.addPolicy2()} >Add Policy</button>)],
      buttn1 :[(<button onClick ={()=>this.addPolicy1()} >Add Policy</button>)]}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  addPolicy1(){this.setState({div2:[(<div> <form onSubmit={this.handleSubmit1}>
    <label style={{marginRight :"2%"}}> Choose Policy :</label>
    <select  value={this.state.value1} onChange={this.handleChange1}>
     <option value="own">Own</option>
     <option value="corp">Corp</option>
   </select>
   <input type="submit" value="Add Policy" style={{ marginLeft:"2%" ,border: "1px solid #000000", background : "rgb(5, 74, 163)" ,fontWeight: "bold",
    color:  "cornsilk",borderRadius:"10%",}}/>
       </form> </div>

  // <div className="col-md-12" style ={{borderStyle: "double"}}>
  // <Policy1/>
  // <Corp/>
  // </div>
  )]})
 
}
     addPolicy2(){
    this.setState({div2:[(
    
      <div style ={{borderStyle: "double", padding :"2%"}}>
        <h5> Own Policy details :</h5>
    <Policy1/>
    <Own/>
    </div>)]})}
  
//   handleCorpChange =(event)=>{
//     this.setState({onw:[(<div className="col-md-6" style ={{borderStyle: "double"}}>
//     <Policy1/>
//     <Corp/>
//     </div>)],buttn :[(<button onClick ={()=>this.addPolicy2()} >Add Policy</button>)]}) 
// }

// handleBothChange =(event)=>{
//   this.setState({onw:[(<div className="col-md-6" style ={{borderStyle: "double"}}>
//   <Policy1/>
//   <Own/>
//   </div>)],buttn :[(<div className="col-md-12" style ={{borderStyle: "double"}}>
//   <Policy1/>
//   <Corp/>
//   </div>)]}) 
// }

handleChange1(event) {
  this.setState({value1: event.target.value});

}
handleSubmit1(event) {
  if(this.state.value1 == "own"){this.setState({div2:[(<div style ={{borderStyle: "double", padding :"2%"}}>
  <h5> Own Policy details :</h5>
<Policy1/>
<Own/>
</div>)]})
}

if(this.state.value1 == "corp"){this.setState({div2:[(
    
  <div style ={{borderStyle: "double", padding :"1%"}}>
    <h5> Crop Policy details :</h5>
  <Policy1/>
  <Corp/>
</div>)]})
}
event.preventDefault();}
handleSubmit(event) {
  if(this.state.value == "own"){this.setState({div1:[(
    
    <div style ={{borderStyle: "double", padding :"2%"}}>
      <h5> Own Policy details :</h5>
  <Policy1/>
  <Own/>
  </div>)]})
   this.setState({div2:[(
    <div>
     {this.state.buttn1}
  </div>
  
  )]})}

  if(this.state.value == "corp"){this.setState({div1:[(
    
    <div style ={{borderStyle: "double", padding :"1%"}}>
      <h5> Crop Policy details :</h5>
    <Policy1/>
    <Corp/>
  </div>)]})
   this.setState({div2:[(
    <div>
    {this.state.buttn2}
  </div>
   
  
  )]})}
  if(this.state.value == "Both"){this.setState({div1:[(
    
      <div style ={{borderStyle: "double",padding :"1%"}}>
        <h5> Own Policy details :</h5>
    <Policy1/>
    <Own/>
    </div>)]})
     this.setState({div2:[(
      <div style ={{borderStyle: "double",padding :"1%"}}>
      <h5> Crop Policy details :</h5>
    <Policy1/>
    <Corp/>
    </div>
     
    
    )]})}
   event.preventDefault();
}
go()
{console.log(this.state.value)
  // this.setState(
//   {displ:[(<div style ={{borderStyle: "double"}}>
// <Policy1/>
// <Own/>
// </div>)]})

}
handleChange(event) {
  this.setState({value: event.target.value});

}

  render() {

    return (
      <div style={{margin:"2%"}} >
        <h5>Policy Holders / Employee Details</h5>
       

   {/* <select > */}
   <form onSubmit={this.handleSubmit}>
   <label style={{marginRight :"2%"}}> Policy :</label>
   <select  value={this.state.value} onChange={this.handleChange}>
    <option value="own" style={{color :"rgb(5, 74, 163)"}}>Own</option>
    <option value="corp">Corp</option>
    <option value="Both">Both</option>
  </select>
  <input type="submit" value="Go" style={{ marginLeft:"2%" ,border: "1px solid #000000", background : "rgb(5, 74, 163)" ,fontWeight: "bold",
    color:  "cornsilk",borderRadius:"10%",}}/>
      </form> 
  {/* <button onClick ={()=>this.go()} >Go</button>) */}
  <div className="row">
    <div className ="col-md-6">
    {this.state.div1}
    </div>
    <div className ="col-md-6">
    {this.state.div2}
    </div>
  </div>

{/*         
<div className ="row">
        <div className="radio col-md-2">
          <label>
            <input type="radio" value="own"  name ="policy" defaultChecked={true} />
            Own
          </label>
        </div>
        <div className="radio col-md-2">
          <label>
            <input type="radio" value="crop" name ="policy" onChange={this.handleCorpChange} />
            Corporate
          </label>
        </div>
        <div className="radio col-md-2">
          <label>
            <input type="radio" value="both" name ="policy" onChange={this.handleBothChange} />
            Both
          </label>
        </div>
       </div>
       <div className ="row">
       {this.state.onw} 
       <div className="col-md-6">
       {this.state.buttn}
    </div>
       </div>
     

 */}

    </div>
        )
  }

}



export default Policy