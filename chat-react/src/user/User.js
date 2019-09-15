import React, { Component } from "react";
//import waitRequest from "../lib/withRequest";

class User extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data === undefined ? (
              <div />
            ) : (
              this.props.data.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
