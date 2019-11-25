import React, { useState } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import { addTransaction } from "../../store/actions/transactionActions";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

const CreateTransactionForm = props => {
  const [form, setForm] = useState({
    name: {
      name: "name",
      value: "",
      placeholder: "Enter transaction title",
      type: "text",
      required: true
    },
    amount: {
      name: "amount",
      value: "",
      placeholder: "Enter amount in euro",
      type: "number",
      required: true
    }
  });

  const handleChange = event => {
    const { name, value, type } = event.target;
    setForm(form => ({
      ...form,
      [name]: {
        ...form[name],
        value: type === "number" ? parseFloat(value) : value
      }
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      id: uuid(),
      name: form.name.value,
      amountEUR: form.amount.value
    };
    props.addTransaction(data);
    setForm(form => ({
      ...form,
      name: {
        ...form["name"],
        value: ""
      },
      amount: {
        ...form["amount"],
        value: ""
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput {...form.name} width={300} onChange={handleChange} />
      <CustomInput
        {...form.amount}
        width={300}
        min="0.01"
        step="any"
        onChange={handleChange}
      />
      <CustomButton type="submit" title="Post" backgroundColor="#02b3e4" />
    </form>
  );
};

const mapDispatchToProps = {
  addTransaction
};

export default connect(
  null,
  mapDispatchToProps
)(React.memo(CreateTransactionForm));
