import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import errorHandler from "../../hoc/errorHandler/errorHandler";
class Orders extends Component {
  state = {
    loading: true,
    orders: []
  };
  componentDidMount() {
    let ordersArr = [];
    axios
      .get("/orders.json")
      .then(res => {
        for (let key in res.data) {
          ordersArr.push({
            ...res.data[key],
            id: key
          });

          this.setState({
            loading: false,
            orders: ordersArr
          });
        }
      })
      .catch(err => {
        this.setState({
          loading: false
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map(order => {
          return (
            <Order
              ingredients={order.ingridiens}
              key={order.id}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}
export default errorHandler(Orders, axios);
