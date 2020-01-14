import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    showLoader: false
  };

  orderHandler = event => {
    event.preventDefault();

    this.setState({
      showLoader: true
    });
    // alert("ok redy to get");
    const order = {
      ingridiens: this.props.ingredients,
      price: this.props.ingredients["price"],
      custumerInfo: {
        name: "misha",
        address: {
          street: "testStreet",
          contry: "israel"
        },
        email: "test@test2.com"
      }
    };
    console.log(order);

    axios
      .post("/orders.json", order)
      .then(
        this.setState({
          showModul: false,
          showLoader: false
        })
      )
      .catch(
        this.setState({
          showLoader: false,
          showModul: false
        })
      );
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your data</h4>
        <form>
          <Input
            inputType={"input"}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <Input
            inputType={"input"}
            type={"email"}
            name={"email"}
            placeholder={"your Email"}
          />
          <Input
            inputType={"input"}
            type="text"
            name="street"
            placeholder="Your Street Name"
          />
          <Input
            inputType={"input"}
            type="text"
            name="postal"
            placeholder="Your Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
