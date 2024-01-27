import React, { Component } from 'react'

class App extends Component {

state={
  person:{
    fullname: 'Messi',
    bio: 'GOAT',
    imgSrc:'https://static.ffx.io/images/$zoom_0.242%2C$multiply_0.7725%2C$ratio_1.5%2C$width_756%2C$x_0%2C$y_0/t_crop_custom/q_86%2Cf_auto/a0e24e8dfe9e0e93d1a6228efdd4543222819005',
    profession:'football player'
  },
  show: false,
}
toggleShow=() =>{
  this.setState((prevstate) =>({
    person: !prevstate.schow
  }))
}

  render() {
    const {fullname,bio,imgSrc,profession} =this.state.person ; 
    const show = this.props.show ;
    
    return (
      <div> 
        <button onClick={this.toggleShow}>show</button>
        <>
        {""}
        <h1>{fullname}</h1>
        <h6>{bio}</h6>
        <img src={imgSrc} alt="" />
        <p>{profession}</p>
        </>
      </div>
    )
  }
}
export default App
