import React from 'react'
import Profilepic from '../assets/Profilepic.jpg'


function About() {
  return (
    <>
  <div className="flex flex-wrap justify-start">
  <div className="w-6/12 sm:w-4/12 px-4">
    <img src={Profilepic} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
  </div>
</div>
    <div>
    <p className="text-lg font-bold in-line leading-relaxed mt-6 mb-4 text-white-800">
  I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.
</p>
    </div>
    </>
  )
}

export default About