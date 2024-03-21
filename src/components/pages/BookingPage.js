import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../sections/reservePages/BookingForm";
import { useState } from "react";
import { fetchAPI } from "../../bookingsAPI";

export default function BookingPage() {
  
  const output = fetchAPI(new Date());

  const [availableTimes,setTimes] = useState(output);

  function updateTimes(date) {
    const result = fetchAPI(date);
    setTimes(result);

  }

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </>
  );
}
