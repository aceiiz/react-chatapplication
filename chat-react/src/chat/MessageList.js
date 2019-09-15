import React, { Component } from "react";
import Message from "./Message";

class MeesageList extends Component {
  render() {
    const { messages } = this.props;
    return messages.map(messages => (
      <ul className="Messages-list">
        <Message messages={messages} />
      </ul>
    ));
  }
}

export default MeesageList;
