import React from "react";
import { connect } from "react-redux";
import Transaction from "../../components/Transaction/Transaction";
import { calculateWithPrecision } from "../../utils/helpers";
import { removeTransaction } from "../../store/actions/transactionActions";
import "./TransactionsList.css";

const renderTransactions = (transactions, props) => {
  return transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} {...props} />
  ));
};

const renderHighestTransactions = (transactions, props) => {
  const highestTransactions = transactions.filter(
    obj => obj.amountEUR === Math.max(...transactions.map(obj => obj.amountEUR))
  );
  return renderTransactions(highestTransactions, {
    ...props,
    displayButton: false
  });
};

const getSumTransactionsInEuro = transactions => {
  const result = transactions.reduce(
    (sum, current) => sum + current["amountEUR"],
    0
  );
  return result;
};

export const TransactionsList = React.memo(
  ({ transactions, rate, removeTransaction, ...props }) => {
    const sumInEUR = getSumTransactionsInEuro(transactions);
    let euro = "No data";
    let pln = "No data";
    if (sumInEUR) {
      euro = calculateWithPrecision(sumInEUR);
      if (rate) {
        pln = calculateWithPrecision(euro * rate);
      }
    }

    return (
      <div className="transaction-container">
        <div className="best-transaction">
          <h2 className="transactions-list-header">Highest transactions</h2>
          {renderHighestTransactions(transactions, { rate })}
        </div>
        <div className="transactions-list-section">
          <h2 className="transactions-list-header">
            Sum of {transactions.length} transactions EUR: {euro} | PLN: {pln}
          </h2>
          <div className="transactions-list">
            {renderTransactions(transactions, {
              displayButton: true,
              rate,
              removeTransaction
            })}
          </div>
        </div>
      </div>
    );
  }
);

const mapStateToProps = state => ({
  all: state.transaction,
  transactions: state.transaction.table,
  rate: state.transaction.rate
});

const mapDispatchToProps = {
  removeTransaction
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
