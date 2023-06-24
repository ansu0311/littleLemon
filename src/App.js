import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import { useReducer, useState } from 'react';

// 15/06/23 = 1686787200000

function App() {
  const initialState = () => {
    return {0:["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],}
    // 1686787200000: ["17:00"],
  };

  function updateTimes(state,action){
    // console.log("from updatetimes state ", state);
    // console.log("from updatetimes action ", action);
    if(state[action.date] != undefined){
      return state[action.date] = [...state[action.date], action.time]
    }else{
      return {...state,[action.date]: [action.time]}
    }
    // state.map((t)=>{
    //   console.log(t);
    // })
    // state.map((iniState)=>{
    //   const [key, value] = Object.entries(iniState);

    //   if (key === action.date) {
    //     return [value.filter((t) => t !== action.time)];
    //   } else {
    //     return iniState;
    //   }
    // })
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState())

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage newAt={availableTimes} updateFunc={dispatch} />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
