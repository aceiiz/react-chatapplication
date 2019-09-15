import React, { Component } from "react";

class Message extends Component {
  render() {
    const { messages } = this.props;
    return (
      <li>
        <div className="Message-content">
          <div className="username">{messages.member}</div>
          <div className="text">{messages.text}</div>
        </div>
      </li>
    );
  }
}
export default Message;
