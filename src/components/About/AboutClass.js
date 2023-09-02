import React, { Component } from "react";

class AboutClass extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentDidMount() {
    // console.log("Component Did Mount");
  }
  render() {
    return <div>About{this.props.name}</div>;
  }
}

export default AboutClass;
