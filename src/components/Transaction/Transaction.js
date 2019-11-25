import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { calculateWithPrecision } from "../../utils/helpers";
import "./Transaction.css";

const Transaction = ({
  displayButton,
  transaction,
  rate,
  removeTransaction,
  ...props
}) => {
  const handleRemoveTransaction = () => {
    removeTransaction(transaction.id);
  };

  let amount = "No data";
  if (rate) {
    let roundAmountEUR = calculateWithPrecision(transaction.amountEUR);
    amount = calculateWithPrecision(roundAmountEUR * rate) + " PLN";
  }

  return (
    <div className="transaction-wrapper">
      <div className="transaction">
        <h2 className="transaction-name">{transaction.name}</h2>
        <h3 className="transaction-info">
          {calculateWithPrecision(transaction.amountEUR)} EUR
        </h3>
        <h3 className="transaction-info">{amount}</h3>
        {displayButton && (
          <CustomButton
            type="submit"
            title="Delete"
            backgroundColor="#ff7777"
            onClick={handleRemoveTransaction}
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(Transaction);
