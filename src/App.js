import React from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBulder from "./containers/BurgerBulder/BurgerBulder";

function App() {
  return (
    <Layout>
      <BurgerBulder />
    </Layout>
  );
}

export default App;
