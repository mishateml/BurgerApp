import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBulder from "./containers/BurgerBulder/BurgerBulder";
import Checkout from "./containers/CheckoutSum/CheckoutSum";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBulder} />
      </Switch>
    </Layout>
  );
}

export default App;
