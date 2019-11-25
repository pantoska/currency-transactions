import React from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../store/actions/transactionActions";
import CreateTransactionForm from "../../containers/CreateTransactionForm/CreateTransactionForm";
import "./CreateTransactionSection.css";

const CreateTransactionSection = () => {
  return (
    <section className="create-transaction-section">
      <h2 className="create-transaction-section-title">Create Transaction</h2>
      <CreateTransactionForm />
    </section>
  );
};

const mapDispatchToProps = {
  addTransaction
};

export default connect(
  null,
  mapDispatchToProps
)(React.memo(CreateTransactionSection));
