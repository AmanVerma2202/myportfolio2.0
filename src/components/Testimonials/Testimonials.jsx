// import React from "react";
// import Marquee from "react-fast-marquee";
// import  {testimonials}  from "../../Data/Data"; 
// import "./Testimonials.css";

// const Testimonials = () => {
//   return (
//     <div id="testimonials" className="infinite-cards-container">
//       <h1>
//       Warm words from <span style={{ color: "var(--page-accent)" }}>grateful Peers</span>
//       </h1>
//       <Marquee gradient={false} speed={65} pauseOnHover={true}>
//         {testimonials.map((testimonial, index) => (
//           <div className="infinite-card" key={index}>
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="infinite-card-image"
//             />
//             <div className="nameTitle">
//             <h3 className="infinite-card-name">{testimonial.name}</h3>
//             <p className="infinite-card-title">{testimonial.title}</p>
//             </div>
//             <p className="infinite-card-quote">"{testimonial.quote}"</p>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import Marquee from "react-fast-marquee";
import { testimonials } from "../../Data/Data";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div id="testimonials" className="infinite-cards-container">
      <div className="testimonials-heading">
        <span className="testimonials-eyebrow">Testimonials</span>
        <h1>
          Warm words from <span className="accent-text">grateful Peers</span>
        </h1>
      </div>

      <div className="marquee-fade">
        <Marquee gradient={false} speed={45} pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <div className="infinite-card" key={index}>
              <svg
                className="quote-mark"
                viewBox="0 0 32 24"
                aria-hidden="true"
              >
                <path d="M0 24V14.4C0 6.4 4.8 1.2 12.4 0l1.6 3.6C9.2 4.8 6.8 7.6 6.4 12H14v12H0zm18 0V14.4c0-8 4.8-13.2 12.4-14.4L32 3.6c-4.8 1.2-7.2 4-7.6 8.4H32v12H18z" />
              </svg>

              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="infinite-card-image"
                loading="lazy"
              />

              <p className="infinite-card-quote">"{testimonial.quote}"</p>

              <div className="nameTitle">
                <h3 className="infinite-card-name">{testimonial.name}</h3>
                <p className="infinite-card-title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;

