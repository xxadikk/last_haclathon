import React from "react";
import { render } from "react-dom";
import Card from "react-credit-cards";
import "../Pages/Pages.css";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./Utils.js";

import "react-credit-cards/es/styles-compiled.css";

export default class Page extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Оплата прошла успешно. Спасибо за покупку!");
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <h1 style={{ paddingBottom: "3%" }}>Введите данные вашей карты</h1>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/* <small>Name on card:</small> */}

              <input
                id="inp"
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                pattern="[a-z A-Z-]+"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              {/* <small>Card Number:</small> */}

              <input
                id="inp"
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                maxLength="19"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            <div className="form-group">
              {/* <small>Expiration Date:</small> */}

              <input
                id="inp"
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="form-group">
              {/* <small>CVC:</small> */}

              <input
                id="inp"
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <input id="inp" type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button id="ad">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

render(<Page />, document.getElementById("root"));
