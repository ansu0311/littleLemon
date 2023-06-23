import React from 'react';
import OrderBut from '../components/orderbut';
import soups from '../components/soups';
import './soupsonline.css';
import dishes from '../components/dishes';

export default function Soupsonline(props) {
  const incrementCounter = (title, price) => {
    props.setOutputValue(props.outputValue + 1);
    const dish = {title, price };
    dishes.push(dish);
  };

  const decrementCounter = () => {
    if (props.outputValue > 0) {
      props.setOutputValue(props.outputValue - 1);
      dishes.pop();
    }
  };

  return (
    <>
      <h2 id="menus">Soups</h2>
      <div id="soups" className="menu-section">
        {/* Content for Soups section */}
        {soups.map((special) => (
          <OrderBut
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            description={special.description}
            incrementCounter={() => incrementCounter(special.title, special.price,special.id)}
            decrementCounter={decrementCounter}
          />
        ))}
      </div>
    </>
  );
}
