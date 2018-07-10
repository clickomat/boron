import React, { Component } from 'react'
import API from './../../utils/API'

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
                <p>{review.text}</p>
                <p>{review.location}</p>
                <p>{review.rating}</p>
                <p><h5>{"Reviewed by " + review.author}</h5></p>
                <p>{'on '+ review.date}</p>
              </div>
            
          )
:
null
}
        </div>
    }
  };

  export default Review;

 
