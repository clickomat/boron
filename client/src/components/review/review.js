import React, { Component } from 'react'
import API from './../../utils/API'
import Moment from "react-moment";
class Review extends Component {
  constructor (props){
    super(props)
    this.state = {}
  } 

componentDidMount(){
  this.getReviews();
}

  getReviews(){
    API.getReviews().then((res)=>{
      this.setState({reviewList : res.data});
    }) 
  
  }
    render(){
        return <div className='review'>
          {this.state.reviewList ? 
          this.state.reviewList.map(
            (review, i) =>
              <div className="border" key={i}>
                <p><h2>{review.Destination}</h2></p>
                <p><h4>{review.Location}</h4></p>
                <p><h5>{"Reviewed by " + review.Name}</h5></p>
                <p>{review.Rating}</p>
                <p>{review.Review}</p>
                
                <Moment date={review.date} />
              </div>
            
          )
:
null
}
        </div>
    }
  };

  export default Review;

 
