import React from 'react';
import Testimonials from './Testimonials';

function EmmaBostian() {
  return (
    <Testimonials 
        name='Emma Bostian'
        country='Sweden'
        image='emma'
        charge='Software Engineer'
        company='Spotify'
        testimony={<>I have always had trouble learning JavaScript. I have taken many courses, but the freeCodeCamp course was the one that stuck. Studying JavaScript as well as data structures and algorithms at <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to get the job of my dreams as a software engineer at Spotify.'</>} />
  );
}

export default EmmaBostian;