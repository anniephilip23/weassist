import React,{Component} from "react"
import Header from "./Header"
import LoginForm from "./LoginForm"
import Claimform from "./Claimform"
import Login from './Login';
import Screenmain from './Screenmain';
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen6 from "./Screen6"


class Home extends Component {
    constructor(props) {
      super(props)
      this.state= {
        screen :[(<div className ="col">
            <div>
        <button onClick ={()=>this.screen1()}  className="but" style={{marginTop:"2%"}}>Screen1</button></div>
        <div> <button onClick ={()=>this.screen2()}  className="but" style={{marginTop:"2%"}}>Screen2</button></div>
        <div> <button onClick ={()=>this.screen3()}  className="but" style={{marginTop:"2%"}}>Login</button></div>
        <div> <button onClick ={()=>this.screen4()}  className="but" style={{marginTop:"2%"}}>Screen4</button></div>
        <div> <button onClick ={()=>this.screen5()}  className="but" style={{marginTop:"2%"}}>Screen5</button></div>
        <div> <button onClick ={()=>this.screen6()}  className="but" style={{marginTop:"2%"}}>Screen6</button></div>
        </div>
        )]
      }}
        screen1(){this.setState({screen:[(<div><Screen1/></div>)]})
    }
    screen2(){this.setState({screen:[(<div><Screen2/></div>)]})
}

screen3(){this.setState({screen:[(<div><Login/></div>)]})
}
screen4(){this.setState({screen:[(<div><Screenmain /></div>)]})
}
screen5(){this.setState({screen:[(<div><Claimform/></div>)]})
}
screen6(){this.setState({screen:[(<div><Screen6/></div>)]})
}
    render(){

        return(
<div>
{this.state.screen}
</div>)
    }}

export default Home