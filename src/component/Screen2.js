import React,{Component} from "react"
import Header from "./Header"

const Screen2 =()=><div><Header/>
<div  style={{textAlign:"center", marginTop:"10%"}}>
    <iframe className="embed-responsive-item"  src="https://www.youtube.com/embed/qjXgpJpSlCc" 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<div style={{textAlign:"center", marginTop:"5%"}}>
<button>Skip</button>
</div> </div>
export default Screen2