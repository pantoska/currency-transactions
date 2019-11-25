import React from "react";
import CreateTransactionSection from "./components/CreateTransactionSection/CreateTransactionSection";
import TransactionsList from "./containers/TransactionsList/TransactionsList";
import CurrencyRateSection from "./containers/CurrencyRateSection/CurrencyRateSection";
import Layout from "./hoc/layout/Layout";

const App = () => (
  <Layout>
    <CurrencyRateSection />
    <CreateTransactionSection />
    <TransactionsList />
  </Layout>
);

export default App;
