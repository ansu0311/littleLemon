import React from "react";
import "./reservation.css";

export default function Reservation() {
  return (
    <>
      <div className="container4">
        <div className="image-container">
          <img src="restaurant1.jpg" alt="restaurant" className="img-fluid" />
        </div>
        <div className="form-container">
        <form action="/Welcome" method="post">
            <div class="elem-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="visitor_name"  pattern='[A-Z\sa-z]{3,20}' required/>
            </div>
            <div class="elem-group">
              <label for="email">Your E-mail</label>
              <input type="email" id="email" name="visitor_email"  required/>
            </div>
            <div class="elem-group">
              <label for="phone">Your Phone</label>
              <input type="tel" id="phone" name="visitor_phone"  pattern='(\d{3})-?\s?(\d{3})-?\s?(\d{4})' required/>
            </div>
            <hr/>
            <div class="elem-group inlined">
              <label for="adult">Adults</label>
              <input type="number" id="adult" name="total_adults" placeholder="2" min="1" required/>
            </div>
            <div class="elem-group inlined">
              <label for="child">Children</label>
              <input type="number" id="child" name="total_children" placeholder="2" min="0" required/>
            </div>
            <div class="elem-group inlined">
              <label for="checkin-date">Check-in Date</label>
              <input type="date" id="checkin-date" name="checkin" required/>
            </div>
            <div class="elem-group inlined">
              <label for="checkout-time">Check-in time</label>
              <input type="time" id="checkout-time" name="Time" required/>
            </div>
            <div class="elem-group">
              <label for="room-selection">SelectTable</label>
              <select id="room-selection" name="room_preference" required>
                  <option value="">Choose a table from the List</option>
                  <option value="connecting">2-person-table</option>
                  <option value="adjoining">4-person-table</option>
                  <option value="adjacent">6-person-table</option>
              </select>
            </div>
            <hr/>
            <div class="elem-group">
              <label for="message">Anything Else?</label>
              <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
            </div>
                <button type="submit" id="booktable">Book The table</button>
          </form>
        </div>
      </div>
    </>
  );
}
