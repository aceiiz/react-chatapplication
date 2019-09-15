import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import MeesageList from "./MessageList";
import MeesageForm from "./MessageForm";
import { Redirect } from "react-router-dom";

class Chatroom extends Component {
  state = {
    messages: [
      { text: "hi", member: "A" },
      { text: "hi1", member: "B" },
      { text: "hi2", member: "C" },
      { text: "hi3", member: "D" }
    ]
  };

  componentDidMount() {
    if (this.state.socket == null) {
      const socket = socketIOClient("http://localhost:8080");
      socket.on("message", message => {
        this.addMessage(message);
      });

      this.setState({ socket: socket });
    }
  }

  onMessageSend = message => {
    this.addMessage(message);

    this.state.socket.emit("emit", { ...message });
  };

  addMessage = message => {
    this.setState({ messages: [...this.state.messages, { ...message }] });
  };

  render() {
    if (this.props.location.name == null) {
      return <Redirect to="/chat"></Redirect>;
    }

    const { name } = this.props.location;
    return (
      <div>
        <MeesageList messages={this.state.messages} />
        <MeesageForm onMessageSend={this.onMessageSend} currentMember={name} />
      </div>
    );
  }
}

export default Chatroom;
