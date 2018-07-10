import React, { Component } from 'react'
import API from './../../utils/API'

class Hotel extends Component {
  constructor (props){
    super(props)
    this.state = {}
  } 

componentDidMount(){
  this.getHotels();
}

  getHotels(){
    API.getHotels().then((res)=>{
      this.setState({hotelList : res.data});
    }) 
  
  }
    render(){
        return <div className='hotel'>
          {this.state.hotelList ? 
          this.state.hotelList.map(
            (hotel, i) =>
              <div className="border" key={i}>
                <p>{hotel.name}</p>
                <p>{hotel.location}</p>
                <p>{hotel.rating}</p>
                <p>{hotel.cost}</p>
                <p>{hotel.text}</p>
                <p>{hotel.www}</p>
                
                
                <p><h5>{"Added by " + hotel.author}</h5></p>
                <p>{'on '+ hotel.date}</p>

 


              </div>
            
          )
:
null
}
        </div>
    }
  };

  export default Hotel;