import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function BookingForm(props){
    // console.log(props);
    // console.log(0 in Object.keys(props.newAt));
    const [availableTimes, setAvailableTimes] = useState(props.newAt[0]);
    const [date, setDate] = useState();
    const [time, setTime] = useState(availableTimes[0]);
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    // const navigate = useNavigate();

    function submitForm(event){
        event.preventDefault();

        if(date == undefined || guest <1){
          if(date == undefined){
            document.getElementById("dateError").innerHTML="Invalid date selected.";
          }
          
          if(guest < 1){
            document.getElementById("guestError").innerHTML="Guest cannot be less than 1";
          }
        }else{
          props.updateFunc({date: date, time: time})
  
          // navigate("/");
        }

        // console.log(date);
        // console.log("form Time : ", time);
        // console.log(guest);
        // console.log(occasion);

    }

    function applyDateChange(event){
        let oriTime = [
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ];
        const selectedDate = Date.parse(event.target.value);
        setDate(selectedDate);

        if(props.newAt[selectedDate] != undefined) {
          setAvailableTimes(oriTime.filter((t)=>{
            if(!(props.newAt[selectedDate].includes(t))){
                return t;
            }
          }))
        }else{
            setAvailableTimes(oriTime);
        }

    }

    return (
      <div className="bookForm">
        <form
          style={{ display: "grid", gap: "20px", width: "50%" }}
          onSubmit={submitForm}
        >
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            onChange={applyDateChange}
          />
          <span id="dateError"></span>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" onChange={(e) => setTime(e.target.value)}>
            {availableTimes.map((t)=>{
                return <option key={t} value={t}>{t}</option>;
            })}
            {/* <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option> */}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
          />
          <span id="guestError"></span>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <input aria-label="submit button" type="submit" value="Make Your reservation" />
        </form>
      </div>
    );
}