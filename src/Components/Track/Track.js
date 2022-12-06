import React from "react";
import "./Track.css";

class Track extends React.Component {
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>track name</h3>
          <p>track artist | track album</p>
        </div>
        <button class="Track-action">+ -</button>
      </div>
    );
  }
}

export default Track;
