import React from "react";
import '../style-sheets/Testimonials.css';

function Testimonials(props) {
    return (
      <div className='container-testimonials'>
        <img
           className='image-testimonials'
           src={require(`../img/testimony-${props.image}.png`)}
           alt="Photo of Testimonials" />
          <div className='container-text-testimonials'>
            <p className='name-testimonials'><strong>{props.name}</strong> in {props.country}</p>
            <p className='charge-testimonials'>{props.charge} in <strong>{props.company}</strong></p>
            <p className='text-testimony'>"{props.testimony}"</p>
          </div>
      </div>
    );
}

export default Testimonials;