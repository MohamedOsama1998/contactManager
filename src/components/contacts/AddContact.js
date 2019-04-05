import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {
      name: "",
      email: "",
      phone: ""
    },
    shown: false
  };

  showAddContact = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      shown: !this.state.shown,
      errors: {
        name: "",
        email: "",
        phone: ""
      }
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, errors } = this.state;

    if (name === "" || email === "" || phone === "") {
      const errorsCopy = errors;
      name === ""
        ? (errorsCopy.name = "Name is required...")
        : (errorsCopy.name = "");
      email === ""
        ? (errorsCopy.email = "Email is required...")
        : (errorsCopy.email = "");
      phone === ""
        ? (errorsCopy.phone = "Phone is required...")
        : (errorsCopy.phone = "");
      this.setState({
        errors: errorsCopy
      });
    } else {
      const contact = {
        id: uuid(),
        name,
        email,
        phone
      };

      dispatch({ type: "ADD_ACC", payload: contact });

      this.setState({
        name: "",
        email: "",
        phone: "",
        shown: false,
        errors: {
          name: "",
          email: "",
          phone: ""
        }
      });
    }
  };

  render() {
    const { name, email, phone, shown, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">
                  Add Contact{" "}
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={this.showAddContact}
                    className="fas fa-sort-down"
                  />
                  {shown ? (
                    <div className="card-body">
                      <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        <TextInputGroup
                          label="Name"
                          name="name"
                          placeholder="Enter Name..."
                          value={name}
                          type="text"
                          onChange={this.onChange}
                          error={errors.name}
                        />
                        <TextInputGroup
                          label="Email"
                          name="email"
                          placeholder="Enter Email..."
                          value={email}
                          type="email"
                          onChange={this.onChange}
                          error={errors.email}
                        />
                        <TextInputGroup
                          label="Phone"
                          name="phone"
                          placeholder="Enter Phone..."
                          value={phone}
                          type="number"
                          onChange={this.onChange}
                          error={errors.phone}
                        />
                        <input
                          type="submit"
                          value="Add Contact"
                          className="btn btn-block btn-light"
                        />
                      </form>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
