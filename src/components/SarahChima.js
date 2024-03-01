import React from 'react';
import Testimonials from './Testimonials';

function SarahChima() {
  return (
    <Testimonials
        name='Sarah Chima'
        country='Nigeria'
        image='sarah'
        charge='Software Engineer'
        company='ChatDesk'
        testimony={<><strong>freeCodeCamp was the gateway to my career</strong>. freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my programming knowledge from a complete beginner level to a very confident level. It was everything I needed to land my first developer job at an amazing company.</>} />
  );
}

export default SarahChima;