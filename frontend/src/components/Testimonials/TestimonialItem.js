import React from "react";
// import quoteIcon from '../../../assets/img/icons/quote.png'

function TestimonialItem(props) {
  return (
    <div className="testimonial-item testimonial-item--3">
      <div className="testimonial-thumb">
        <img
          src={process.env.PUBLIC_URL + ("/assets/img/" + props.authorThumb)}
          alt="Samteriors"
        />
      </div>

      <div className="testimonial-txt">
        <img
          src={process.env.PUBLIC_URL + "/assets/icons/quote.png"}
          alt="Samteriors"
        />
        <p>{props.quote}</p>
        <h5 className="client-name">{props.author}</h5>
      </div>
    </div>
  );
}

export default TestimonialItem;
