import React, { Component } from "react";
import axios from "axios";
import { SingleBlog } from "./SingleBlog";
import { SingleFood } from "./SingleFood";

export default class HomeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: null
    };
    this.getData();
  }
  getData() {
    let limit = 6;
    axios({
      method: "get",
      url: `https://bookscrap-server.herokuapp.com/blogs/randomblog/${limit}`
    })
      .then(response => {
        this.setState({
          blogs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  showListVideo(blogs) {
    if (blogs == null) {
      return null;
    } else
      return blogs.map(blog => {
        let element = null;
        if (blog.type === "video") {
          element = <SingleBlog key={blog.id} blog={blog}></SingleBlog>;
        }
        return element;
      });
  }
  showListFood(blogs) {
    if (blogs == null) {
      return null;
    } else
      return blogs.map(blog => {
        let element = null;
        if (blog.type === "food")
          element = <SingleFood key={blog.id} blog={blog}></SingleFood>;
        return element;
      });
  }
  render() {
    let { blogs } = this.state;
    return (
      <section className="blog_area section_padding_0_80">
        <br></br>
        <br></br>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="row">{this.showListVideo(blogs)}</div>
            </div>
            {/* ****** Blog Sidebar ****** */}
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
              <div className="blog-sidebar mt-5 mt-lg-0">
                {/* Single Widget Area */}
                <div className="single-widget-area about-me-widget text-center">
                  <div className="widget-title">
                    <h6>About Me</h6>
                  </div>
                  <div className="about-me-widget-thumb">
                    <img src="./static/img/about-img/1.jpg" alt="" />
                  </div>
                  <h4 className="font-shadow-into-light">Shopia Bernard</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt
                  </p>
                </div>
                {/* Single Widget Area */}
                <div className="single-widget-area subscribe_widget text-center">
                  <div className="widget-title">
                    <h6>Been Together</h6>
                  </div>
                  <div className="subscribe-link">
                    <div className="countup" id="countup1">
                      <span className="timeel years">00</span>&nbsp;
                      <span className="timeel timeRefYears  badge badge-danger">
                        years
                      </span>
                      &nbsp;
                      <span className="timeel days">00</span>&nbsp;
                      <span className="timeel timeRefDays badge badge-primary">
                        days
                      </span>
                      <br></br>
                      <span className="timeel hours">00</span> &nbsp;
                      <span className="timeel timeRefHours badge badge-success">
                        hours
                      </span>
                      &nbsp;
                      <span className="timeel minutes">00</span> &nbsp;
                      <span className="timeel timeRefMinutes badge badge-info">
                        minutes
                      </span>{" "}
                      &nbsp;
                      <span className="timeel seconds">00</span> &nbsp;
                      <span className="timeel timeRefSeconds badge badge-secondary">
                        seconds
                      </span>{" "}
                      &nbsp;
                    </div>
                  </div>
                </div>
                {/* Single Widget Area */}
                <div className="single-widget-area popular-post-widget">
                  <div className="widget-title text-center">
                    <h6>Random Post</h6>
                    {this.showListFood(blogs)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
