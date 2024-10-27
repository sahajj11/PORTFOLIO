import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckInChange = (e) => setCheckInDate(e.target.value);
  const handleCheckOutChange = (e) => setCheckOutDate(e.target.value);
  const handleGuestsChange = (e) => setNumberOfGuests(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to calculate the price and handle form submission
    console.log({
      checkInDate,
      checkOutDate,
      numberOfGuests,
      totalPrice,
    });
  };

  return (
    <Container>
      <h2 className="my-4">Book Your Stay</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="checkInDate">
          <Form.Label>Check-in Date</Form.Label>
          <Form.Control
            type="date"
            value={checkInDate}
            onChange={handleCheckInChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="checkOutDate">
          <Form.Label>Check-out Date</Form.Label>
          <Form.Control
            type="date"
            value={checkOutDate}
            onChange={handleCheckOutChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="numberOfGuests">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={numberOfGuests}
            onChange={handleGuestsChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Total Price</Form.Label>
          <Form.Control
            type="text"
            value={`$${totalPrice}`}
            readOnly
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirm Booking
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
