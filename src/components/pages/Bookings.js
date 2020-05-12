import React from "react";
import { Link } from "react-router-dom";
import BookingStyle from "../styledComponents/BookingStyle";
import DatePicker from './DatePicker'

const Bookings = () => {
  return (
    <BookingStyle>
      <div className="book-now">
        <h3>BOOK NOW</h3>
        <p>
          Fill in the booking form below to automatically book through our
          online reservation system. If you are unsure please feel free to{" "}
          <Link to="contact">contact us</Link> and we will be happy to make the
          booking for you.
        </p>
        <h5>
          DON'T FORGET TO ENQUIRE ABOUT OUR LOYALTY PROGRAM, AND GET 10%
          DISCOUNT ON OUR ROOM RATES.
        </h5>
      </div>

      <div className="check-in-time">
        <p>Check in time 14:00 p.m.</p>
        <p>Check out time 11:00 a.m.</p>

        <p>
          Night arrival after 24:00 p.m., must be booked as for the day before
          to avoid waiting until your room will be available at 14;00.
        </p>

        <p>
          Cancellation policy - 1-5 rooms booked cancelled within 2 days prior
          date of ARRIVAL 100% pay, 6-10 rooms booked cancelled 1 week prior
          date of ARRIVAL 100% pay, 11-20 rooms booked cancelled 3 weeks prior
          ARRIVAL date 100% pay, 21- 40 rooms booked cancelled 4 weeks prior
          ARRIVAL date 100% pay.
        </p>
      </div>

      <div className="date-picker">
        <DatePicker />
      </div>
    </BookingStyle>
  );
};

export default Bookings;
