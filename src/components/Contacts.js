import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            key={contact.id}
          />
        ))}
      </div>
    );
  }
}
