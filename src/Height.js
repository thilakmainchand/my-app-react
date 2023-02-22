import React, { Component } from "react";
class Height extends React.Component{
    constructor(){
        super();
        this.state={
            pi:"3.14",
            b:"4",
            r:"3"
        }
    }
     Formula=()=>{
        this.setState({r:"5"})
    }
    hifi=()=>{
        this.setState({r:"7"})
    }
      
render() {
    return(
<>
    <button onClick={this.Formula}>click here</button>
    <button onClick={this.hifi}>change 2</button>

    <h1> AREA :{this.state.pi * this.state.r*this.state.r}</h1>
    
    </>
    )
    
}
}
  export default Height;
 