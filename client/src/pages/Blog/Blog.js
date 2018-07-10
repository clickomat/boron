import React, { Component } from "react";
import Blog from "./../../components/blog";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from './../../utils/API'
import { Container } from "../../components/Grid";


// function reloadPage()
// {
//   window.location.reload();
// }

class Blogs extends Component {
state = {
    bloglist: [],
    title: "",
    text: "",
    author: "",
  };

  componentDidMount() {
    this.loadBlogs();
  };

  loadBlogs = () => {
    API.getBlogs()
      .then(res =>
        this.setState({ blog: res.data, title:"",text: "",author: ""  })
      )
      .catch(err => console.log(err));
  };

  deleteBlog = id => {
    API.deleteBlog(id)
      .then(res => this.loadBlogs())
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
    if (this.state.title && this.state.author) {
      API.saveBlog({
        title: this.state.title,
        text: this.state.text,
        author: this.state.author
      })
        .then(res => this.loadBlogs())
        .catch(err => console.log(err));

    }

    // reloadPage();

  };


render (){
  return (
    <main>
      <div className="row">
        <div className="col s12">
          <div className="card-panel hotels">
            <div className="row">
              <div className="col s4">
                <h3>Blogs</h3>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <form onSubmit={this.handleFormSubmit}>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                  />
                  <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  />
                  <TextArea
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    name="text"
                    placeholder="Text (required)"
                  />
                  <FormBtn
                    disabled={!(this.state.title && this.state.author && this.state.text)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Blog
                  </FormBtn>
                </form>
              </div>
              <div className="col s6">
              <Container>
                <div>
                    <Blog />
                    </div>
                  </Container>
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
};
};

export default Blogs;
