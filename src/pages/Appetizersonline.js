import React from 'react';
import OrderBut from '../components/orderbut';
import appetizers from '../components/appetizers';
import './soupsonline.css';
import dishes from '../components/dishes';

export default function Appetizersonline(props) {

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
      <h2  id="menus">Appetizers</h2>
      <div id="appetizers" className="menu-section">
        {/* Content for Soups section */}
        {appetizers.map((special) => (
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
