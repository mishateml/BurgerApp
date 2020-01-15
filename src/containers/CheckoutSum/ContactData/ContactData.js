import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      street: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Street"
        },
        value: ""
      },
      zipCode: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Zip Code"
        },
        value: ""
      },
      contry: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Contry"
        },
        value: ""
      },
      email: {
        elType: "input",
        elConfig: {
          type: "email",
          placeholder: "Your E-mail"
        },
        value: ""
      },
      deliveryMethod: {
        elType: "select",
        elConfig: {
          options: [
            { val: "fast", displayVal: "Fastest" },
            { val: "cheap", displayVal: "Cheapest" }
          ]
        },
        value: ""
      }
    }
  };

  changedHandler = (event, eventId) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormEl = {
      ...updatedOrderForm[eventId]
    };
    updatedFormEl.value = event.target.value;

    updatedOrderForm[eventId] = updatedFormEl;
    this.setState({
      orderForm: updatedOrderForm
    });
  };

  orderHandler = event => {
    event.preventDefault();

    this.setState({
      showLoader: true
    });

    const formElData = {};

    for (let formElId in this.state.orderForm) {
      formElData[formElId] = this.state.orderForm[formElId].value;
    }

    const order = {
      ingridiens: this.props.ingredients,
      price: this.props.ingredients["price"],
      custumerInfo: formElData
    };

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
    const formElArr = [];

    for (let key in this.state.orderForm) {
      formElArr.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your data</h4>
        <form onSubmit={this.orderHandler}>
          {formElArr.map(form => (
            <Input
              changed={event => this.changedHandler(event, form.id)}
              key={form.id}
              elType={form.config.elType}
              elConfig={form.config.elConfig}
              value={form.config.value}
            />
          ))}
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
