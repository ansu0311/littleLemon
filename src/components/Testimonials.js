import React from 'react'
import "./Testimonials.css"

export default function Testimonials(props) {
  return (
    <>
    <div className='test'>
        <div className="image">
            <img src={props.profile} alt='Customer profile' className='img-fluid' />
        </div>
        <div className="review">
            <p>{props.review}</p>
            <p>{props.rating}</p>
            <h4>- {props.name}</h4>
        </div>
    </div>
    </>
  )
}
