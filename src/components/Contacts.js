import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
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

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
