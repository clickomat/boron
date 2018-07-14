import React, { Component } from "react";
import Review from "./../../components/review";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from './../../utils/API'

function reloadPage()
{
  window.location.reload();
}

class Reviews extends Component {
state = {
    reviewlist: [],
    location: "",
    author: "",
    text: "",
    rating: "",
  };

  componentDidMount() {
    this.loadReviews();
  };

  loadReviews = () => {
    API.getReviews()
      .then(res =>
        
      
        this.setState({ review: res.data, location: "", author: "", text: "" ,rating: "", })
      )
      .catch(err => console.log(err));
  };

  deleteReview = id => {
    API.deleteReview(id)
      .then(res => this.loadReviews())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // console.log('handling form submit ...');
    event.preventDefault();
    if (this.state.location && this.state.author) {
      API.saveReview({
        location: this.state.location,
        author: this.state.author,
        rating: this.state.rating,
        text: this.state.text
      })
        .then(res => this.loadReviews())
        .catch(err => console.log(err));
    }

    reloadPage();

  };


render (){
  console.log('howdy from review.js');
  return (
    <main>
      <div className="row">
        <div className="col s12">
          <div className="card-panel hotels">
            <div className="row">
              <div className="col s4">
                <h3 className="centered">Reviews</h3>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <form onSubmit={this.handleFormSubmit}>
                <Input
                      value={this.state.Name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Name (required)"
                    />
                    <Input
                      value={this.state.Location}
                      onChange={this.handleInputChange}
                      name="location"
                      placeholder="Location (required)"
                    />
                    <Input
                      value={this.state.Rating}
                      onChange={this.handleInputChange}
                      name="rating"
                      placeholder="Rating 1-5(required)"
                    />
                    <Input
                      value={this.state.Destination}
                      onChange={this.handleInputChange}
                      name="destination"
                      placeholder="Destination (required)"
                    />
                    <TextArea
                      value={this.state.Review}
                      onChange={this.handleInputChange}
                      name="review"
                      placeholder="Review (Optional)"
                    />
                    <FormBtn
                      disabled={!(this.state.Location && this.state.Name)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Review
                    </FormBtn>
                  </form>
                </div>
                <div className="col s6">
                  <p>
                    <Review />
                  </p>
                </div>
            <div className="row">
              <div className="col s12">
                <div className="container">
                  {/* <p>
                    <Review />
                  </p> */}
                  {/* <div className="card-panel hotel"></div>
                                            <div className="card-panel hotel"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};
};
export default Reviews;
