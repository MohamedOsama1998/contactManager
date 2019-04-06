import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {
      name: "",
      email: "",
      phone: ""
    }
  };

  showAddContact = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
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

  onSubmit = async (dispatch, e) => {
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
        name,
        email,
        phone
      };

      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        contact
      );

      dispatch({ type: "ADD_ACC", payload: res.data });

      this.setState({
        name: "",
        email: "",
        phone: "",
        errors: {
          name: "",
          email: "",
          phone: ""
        }
      });
      this.props.history.push("/");
    }
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <div className="card mb-3">
                <div className="card-header">Add Contact </div>
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
                      type="text"
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
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}