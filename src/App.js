// import React from 'react';

// class App extends React.Component{
//   // Initializing State Value ( which is counter Value)
//   state={
//     count:0,
//   };
//   hasclickedInc=()=>{
//     this.setState({count:this.state.count+1})
//   }
//   hasclickedDec=()=>{
//     this.setState({count:this.state.count-1})
//   }
//   hasclickedRes=()=>{
//     this.setState({count:0})
//   }
//   render(){
//     return(
//       //Counter APP
//       // <div>
//         //     <h1>The Counter Value is : {this.state.count}</h1>
//         //     <button style={{width:"100px",marginRight:"30px",height:"30px"}} onClick={this.hasclickedInc}>Increment</button>
//         //     <button style={{width:"100px",marginRight:"30px",height:"30px"}} onClick={this.hasclickedDec}>Decrement</button>
//         //     <button  style={{width:"100px",marginRight:"30px",height:"30px"}} onClick={this.hasclickedRes}>Reset</button>
//         //   </div>
//         <div>

//         </div>

      
//     );
//   }
// }
import Profile from "./components/profile";
import React, { Component } from 'react'

export default class App extends Component {
  state=[
    {
      id:1,
      name:"John",
      img:"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/102516215/original/8fa2f06ee5c29c806bcb1cd28b8f5a6ac80e2a07/say-anything-you-want-to-random-people.jpeg",
      description:"Chill And Vibed!"

    },
    {
      id:2,
      name:"Mary",
      img:"https://i.pinimg.com/originals/bd/2c/24/bd2c24bd121470802f4b2c1286505ec7.jpg",
      description:"Reading Life!"

    },
    {
      id:3,
      name:"Edward",
      img:"https://i1.wp.com/metro.co.uk/wp-content/uploads/2015/07/daniel.jpeg?quality=90&strip=all&zoom=1&resize=540%2C540&ssl=1",
      description:"Just Having Fun!"

    },

  ];
  render() {
    return (
      <div>
        
        {
          this.state.map((profile)=>{
            return(<Profile profileProps={profile} key={profile.id}/>)
          }
          )
        }
        
        
      </div>
    )
  }
}
