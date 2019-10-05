import React, { Component } from "react";

export class SingleSlide extends Component {
  render() {
    const { blog } = this.props;
    return (
      <div className="welcome-single-slide">
        {/* Post Thumb */}
        <img src="./static/img/bg-img/slide-2.jpg" alt="" />
        {/* Overlay Text */}
        <div className="project_title">
          <div className="post-date-commnents d-flex">
            <a href="/">{blog.timeUp}</a>
            <a href="/">5 Comment</a>
          </div>
          <a href="/">
            <h5>{blog.title}</h5>
          </a>
        </div>
      </div>
    );
  }
}

export default SingleSlide;