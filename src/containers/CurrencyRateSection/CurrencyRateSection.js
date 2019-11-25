import React from "react";
import { connect } from "react-redux";
import CustomInput from "../../components/CustomInput/CustomInput";
import { changeRate } from "../../store/actions/transactionActions";
import "./CurrencyRateSection.css";

const CurrencyRateSection = props => {
  return (
    <section className="currency-rate-section">
      <span className="currency-rate-label">1 EUR =</span>
      <CustomInput
        type="number"
        placeholder="Enter currency rate"
        step="any"
        min="0"
        width={300}
        value={props.rate}
        onChange={props.handleChange}
      />
      <span className="currency-rate-label">PLN</span>
    </section>
  );
};

const mapStateToProps = state => ({
  rate: state.transaction.rate
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(changeRate(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CurrencyRateSection));
