
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Initialize in-memory data structures
const seats = new Map(); // Key: seat number, Value: { userId, status, timer }
let currentUserId = 1;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to prebook a seat

app.post('/prebook',(req,res)=>{
	const {seatNo}  = req;

	if(!seats.seatNo ||  seats.get(seatNumber ).status ==='available'){
		//now we can prebooked it
		
	}
 })
app.post('/prebook', (req, res) => {
  const { seatNumber } = req.body;

  // Check if the seat is available
  if (!seats.has(seatNumber) || seats.get(seatNumber).status === 'available') {
    // Set the seat as prebooked
    seats.set(seatNumber, {
      userId: currentUserId,
      status: 'prebooked',
      timer: setTimeout(() => {
        // If not booked within 2 minutes, make it available again
        if (seats.get(seatNumber).status === 'prebooked') {
          seats.set(seatNumber, { userId: null, status: 'available', timer: null });
          res.status(400).json({ error: 'Seat prebooking expired' });
        }
      }, 2 * 60 * 1000), // 2 minutes
    });

    res.status(200).json({ message: 'Seat prebooked successfully' });
    currentUserId++;
  } else {
    res.status(400).json({ error: 'Seat is already prebooked or booked' });
  }
});

// Endpoint to book a prebooked seat
app.post('/book', (req, res) => {
  const { seatNumber, userId, passengerData } = req.body;

  if (!seats.has(seatNumber)) {
    res.status(400).json({ error: 'Seat does not exist' });
  } else {
    const seatInfo = seats.get(seatNumber);

    if (seatInfo.status === 'prebooked' && seatInfo.userId === userId) {
      // Book the prebooked seat
      seats.set(seatNumber, { userId, status: 'booked', timer: null });
      clearTimeout(seatInfo.timer);
      res.status(200).json({ message: 'Seat booked successfully' });
    } else {
      res.status(400).json({ error: 'Seat is not prebooked by the specified user' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




