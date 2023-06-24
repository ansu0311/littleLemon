import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe("booking form", ()=>{
  test("Test validation", ()=>{
    const availableTimes = {0:["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],}

    const updateTimes = jest.fn((state,action)=>{
    // console.log("from updatetimes state ", state);
    // console.log("from updatetimes action ", action);
      if(state[action.date] != undefined){
        return state[action.date] = [...state[action.date], action.time]
      }else{
        return {...state,[action.date]: [action.time]}
      }
    })

    render(<BookingForm newAt={availableTimes} updateFunc={updateTimes} />);

    const submitButton = screen.getByText("Make Your reservation");

    fireEvent.click(submitButton);

    expect(screen.getByText("Invalid date selected.")).toBeInTheDocument();

  })

  test("Return valid initialization value when call", ()=>{
      const initialTimes = jest.fn(() => {
        return { 0: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
      });
      
      initialTimes();

      expect(initialTimes).toHaveReturned();
      expect(initialTimes).toHaveReturnedWith({
        0: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      });
  })

  test("Test return value of update time with value", ()=>{

    const updateTime = jest.fn((state, action)=>{
      if (state[action.date] != undefined) {
        return (state[action.date] = [...state[action.date], action.time]);
      } else {
        return { ...state, [action.date]: [action.time] };
      }
    })

    updateTime({ 0: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] },{date:10, time:"18:00"});

    expect(updateTime).toHaveReturned();
    expect(updateTime).toHaveReturnedWith({
      0: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      10: ["18:00"]
    });

  })
})