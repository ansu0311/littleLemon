import React from "react";
import dishes from "../components/dishes";
import "./chekout.css";

export default function Checkout() {
  const uniqueDishes = Array.from(new Set(dishes.map((dish) => dish.title)));
  let totalPrice = 0;

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
          {uniqueDishes.map((title, index) => {
            const dish = dishes.find((dish) => dish.title === title);
            const count = dishes.filter((dish) => dish.title === title).length;
            const numericPrice = parseFloat(dish.price);
            totalPrice += numericPrice * count;

            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{dish.title}</td>
                <td>{dish.price}</td>
                <td>{count}</td>
              </tr>
            );
          })}
          <tr>
            <th colSpan="2">Total</th>
            <td>{totalPrice}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="row2">
        <div className="col-75-2">
          <div className="container2">
            <form action="/Ontheway">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input required
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input required 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input required
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input required
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input required
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input required
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input required
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input required
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input required
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input required
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input required
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input required type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label>
              <input required
                type="submit"
                value="Continue to checkout"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
