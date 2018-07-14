import React, { Component } from "react";
import Hotel from "./../../components/hotel";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Container } from "../../components/Grid";
import API from "./../../utils/API";

function reloadPage() {
  window.location.reload();
}

class Hotels extends Component {
  state = {
    hotellist: [],
    nome: "",
    location: "",
    rating: "",
    cost: "$$",
    www: ""
  };

  componentDidMount() {
    this.loadHotels();
  }

  loadHotels = () => {
    API.getHotels()
      .then(res =>
        this.setState({
          hotel: res.data,
          author:"",
          nome: "",
          location: "",
          rating: "",
          cost: "",
          text:"",
          www: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteHotel = id => {
    API.deleteHotel(id)
      .then(res => this.loadHotels())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.location && this.state.name) {
      API.saveHotel({
        author: this.state.author,
        name: this.state.name,
        location: this.state.location,
        rating: this.state.rating,
        cost: this.state.cost,
        text: this.state.text,
        www: this.state.www
      })
        .then(res => this.loadHotels())
        .catch(err => console.log(err));
    }

    reloadPage();
  };

  render() {
    return (
      <main>
        <div className="row">
          <div className="col s12">
            <div className="card-panel hotels">
              <div className="row">
                <div className="col s4">
                  <h3>Hotels</h3>
                </div>
              </div>
              <div className="row">
                <div className="col s6">
                  <form onSubmit={this.handleFormSubmit}>
                    <Input
                      value={this.state.location}
                      onChange={this.handleInputChange}
                      name="location"
                      placeholder="Location (required)"
                    />
                    <Input
                      value={this.state.rating}
                      onChange={this.handleInputChange}
                      name="rating"
                      placeholder="Rating (required)"
                    />
                    <Input
                      value={this.state.cost}
                      onChange={this.handleInputChange}
                      name="cost"
                      placeholder="Cost (required)"
                    />
                    <Input
                      value={this.state.text}
                      onChange={this.handleInputChange}
                      name="text"
                      placeholder="Text Page (required)"
                    />
                     <Input
                      value={this.state.www}
                      onChange={this.handleInputChange}
                      name="www"
                      placeholder="Web Page (required)"
                    />
                    <FormBtn
                      disabled={!(this.state.location && this.state.name)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Hotel
                    </FormBtn>
                  </form>
                </div>
                <div className="col s6">
                  <p>
                    <Hotel />
                  </p>
                </div>
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
      </main>
    );
  }
}

export default Hotels;
