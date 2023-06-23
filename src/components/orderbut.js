import React, { useState } from 'react';
import '../pages/Home.css';

export default function OrderBut(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    props.incrementCounter(); // Call the parent component's incrementCounter function
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      props.decrementCounter(); // Call the parent component's decrementCounter function
    }
  };

  return (
    <div>
      <div className="container" id="inspec">
        <div className="row">
          <img src={props.image} alt={props.title} className="img-fluid" width={50} />
        </div>
        <div className="row">
          <h3>{props.title}</h3>
          <h3 style={{ color: '#F42F14' }}>{props.price}</h3>
        </div>
        <div className="row">
          <p>{props.description}</p>
        </div>
        <div className="row" id="button">
          <div className="counter">
            <button className="counter-button" onClick={decrementCount}>-</button>
            <p className="counter-value">{count}</p>
            <button className="counter-button" onClick={incrementCount}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
