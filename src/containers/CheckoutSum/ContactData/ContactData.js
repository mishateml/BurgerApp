import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

import { connect } from "react-redux";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Zip Code"
        },
        value: "",
        validation: {
          required: true,
          minLen: 5,
          maxLen: 5
        },
        valid: false,
        touched: false
      },
      contry: {
        elType: "input",
        elConfig: {
          type: "text",
          placeholder: "Your Contry"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elType: "input",
        elConfig: {
          type: "email",
          placeholder: "Your E-mail"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elType: "select",
        elConfig: {
          options: [
            { val: "fast", displayVal: "Fastest" },
            { val: "cheap", displayVal: "Cheapest" }
          ]
        },
        validation: {
          required: false
        },
        value: "",
        valid: true,
        touched: false
      }
    },
    formIsValid: false
  };

  checkValid = (val, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = val.trim() !== "" && isValid;
    }

    if (rules.minLen) {
      isValid = val.length >= rules.minLen && isValid;
    }
    if (rules.maxLen) {
      isValid = val.length <= rules.maxLen && isValid;
    }
    return isValid;
  };

  changedHandler = (event, eventId) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormEl = {
      ...updatedOrderForm[eventId]
    };
    updatedFormEl.value = event.target.value;
    updatedFormEl.touched = true;
    updatedFormEl.valid = this.checkValid(
      updatedFormEl.value,
      updatedFormEl.validation
    );

    updatedOrderForm[eventId] = updatedFormEl;

    let formIsValid = true;

    for (let validCheack in updatedOrderForm) {
      formIsValid = updatedOrderForm[validCheack] && formIsValid;
      console.log(formIsValid);
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid
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
      ingridiens: this.props.ings,
      price: this.props.price,
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

    this.props.history.push("/");
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
              touched={form.config.touched}
              elConfig={form.config.elConfig}
              value={form.config.value}
              valid={!form.config.valid}
              shudeValidate={form.config.validation.required}
            />
          ))}
          <Button btnType="Success" disabled={!this.state.formIsValid}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.price
  };
};

export default connect(mapStateToProps)(ContactData);
