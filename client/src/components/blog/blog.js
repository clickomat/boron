import React, { Component } from 'react'
import API from './../../utils/API'

class Blog extends Component {
  constructor (props){
    super(props)
    this.state = {}
  } 

componentDidMount(){
  this.getBlogs();
}

  getBlogs(){
    API.getBlogs().then((res)=>{
      this.setState({blogList : res.data});
    }) 
  
  }
    render(){
        return <div className='blog'>
          {this.state.bloglist ? 
          this.state.blogList.map(
            (blog, i) =>
              <div className="border" key={i}>
                <p>{blog.title}</p>
                <p>{blog.text}</p>
                <p><h5>{"Added by " + blog.author}</h5></p>
                <p>{'on '+ blog.date}</p>
              </div>
            
          )
:
null
}
        </div>
    }
  };

  export default Blog;