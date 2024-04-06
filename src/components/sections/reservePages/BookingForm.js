import { useState } from "react";
import "./booking.css";
import {Link} from 'react-router-dom';

export default function ReservationForm(props) {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times,index) => <option key={index}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times,index) => <option key={index}>{times}</option>));
  }

  const [time, setTime] = useState("PICK A TIME");

  function handleTime(event){
    setTime(event.target.value);
  }

  function updateReservation(){
    setIsBooked(false) ;
  }

  function pickTime(){
    if(time === "PICK A TIME" || time === "Select a time"){
      return "red";
    }
    return "green";
  }

  function handleSubmitForm(event){
    event.preventDefault();
    setIsBooked(true);

  }

  const reservationCard = () => {
    const tRed = pickTime();
    return(
      <div className="reservation-container">
        <div className="reservation-details">
          <p>First Name: <span id="fNameValue">{fName} </span></p>
          <p>Last Name: <span id="lNameValue">{lName} </span></p>
          <p>Email: <span id="emailValue">{email}</span></p>
          <p>Phone Number: <span id="telValue">{tel}</span></p>
          <p>Number of People:{people} <span id="peopleValue"></span></p>
          <p>Date: <span id="dateValue">{date}</span></p>
          <p>Time: <span style={{color:tRed}} id="timeValue"> {time}</span></p>
          <p>Occasion: <span id="occasionValue">{occasion}</span></p>
          <p>Seating Preferences: <span id="preferencesValue">{preferences}</span></p>
          <p>Additional Comments:  <span id="commentsValue">{comments}</span></p>
        </div>
        <div className="reservation-actions">
          <Link to={`/confirmation/reservation`}><button className="confirm-button">Confirm</button></Link>
          <button onClick={updateReservation} className="edit-button">Edit</button>
        </div>
      </div>
    )
  }

  const handleForm = () => {
    return(
      <form onSubmit={handleSubmitForm} className="reservation-form book-bg">
      <div>
        <label htmlFor="fName">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="lName">Last Name</label> <br></br>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" value={time} onChange={handleTime} required>
          <option>Select a time</option>
          {finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: Please double-check your reservation-info before submitting your reservation request.
          </p>
        </small>
          <button className="action-button" type="submit">Book Table</button>
      </div>
    </form>
      
    )
  }

  return (
    <>
      {isBooked ? reservationCard() : handleForm()}
    
    </>
     
  )
}
