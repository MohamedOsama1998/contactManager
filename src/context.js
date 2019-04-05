import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DEL_ACC":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_ACC":
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
};

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
    ],

    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
