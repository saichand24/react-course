import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedin: true,
    };
  }
  render() {
    return this.state.isLogedin && <div>Welcome Saichand</div>
    // return this.state.isLogedin ? (
    //   <div>Welcome Saichand</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // let message
    // if (this.state.isLogedin) {
    //   message = <div>Welcome Saichand</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>
    // if (this.state.isLogedin) {
    //   return <div>Welcome Saichand</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Saichand</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
