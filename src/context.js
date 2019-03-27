import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Amira",
        email: "amira@gmail.com",
        phone: "3333-333-3333"
      },
      {
        id: 2,
        name: "Mohamed",
        email: "mohamed@gmail.com",
        phone: "3333-333-3333"
      },
      {
        id: 3,
        name: "foo",
        email: "foo@gmail.com",
        phone: "3333-333-3333"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
