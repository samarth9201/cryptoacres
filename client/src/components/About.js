import React from 'react'
import Aboutsection from './Aboutsection'
import Services from './Sections';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Aboutsection/Data';

const About = () => {
  return (
      <>
        <Aboutsection {...homeObjOne} />
        <Aboutsection {...homeObjTwo} />
        <Services />
        <Aboutsection {...homeObjThree} />
        <Aboutsection {...homeObjFour} />
      </>
  )
}

export default About
