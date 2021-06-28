import React, { Component } from "react";

import ReactPlayer from "react-player";
class video extends Component {
  render() {
    return <ReactPlayer url="https://youtu.be/kyyRxfmAUhY" playing controls />;
  }
}

export default video;
