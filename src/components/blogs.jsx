import React, { Component } from "react";
import { getBlogs } from "../services/blogService";
import { getCategories } from "../services/category";
import { img1 } from "../assets/img/reactTable.jpg";
import _ from "lodash";

class Blogs extends Component {
  state = {
    blogs: [],
    categories: [],
    imageBaseURL: "../assets/img/"
  };

  componentDidMount() {
    const categories = [{ _id: "", name: "All Category" }, ...getCategories()];
    this.setState({ blogs: getBlogs(), categories: categories });

    console.log(this.state.blogs.length);
  }

  handleDelete = blog => {
    const blogs = this.state.blogs.filter(b => b._id !== blog._id);
    this.setState({ blogs: blogs });
  };

  render() {
    const { blogs: data } = this.state;

    return (
      <div className="row">
        {data.map(item => (
          <div key={item._id}>
            <img
              src={process.env.PUBLIC_URL + "/images/" + item.image}
              style={{ width: "330px" }}
              className="img-raised"
            />
            <p className="smallFontAccent">{item.genre.name}</p>
            <p className="titleFont">{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Blogs;
