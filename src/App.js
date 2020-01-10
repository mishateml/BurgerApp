import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBulder from "./containers/BurgerBulder/BurgerBulder";
import Checkout from "./containers/CheckoutSum/CheckoutSum";

function App() {
  return (
    <Layout>
      <BurgerBulder />
      <Checkout />
    </Layout>
  );
}

export default App;
