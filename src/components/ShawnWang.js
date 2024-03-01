import React from 'react';
import Testimonials from './Testimonials';


function ShawnWang() {
  return (
    <Testimonials 
      name='Shawn Wang'
      country='Singapur'
      image='shawn'
      charge='Software Engineer'
      company='Amazon'
      testimony={<>"It is scary to change careers. I only gained the confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a software engineer. <strong>freeCodeCamp changed my life.</strong></>} />
  );
}

export default ShawnWang;