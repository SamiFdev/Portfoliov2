import React from 'react'

function NavBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 top-0 right-100 w-[50vw] bg-green-900 p-20 pl-5 text-white fixed h-full ">
  <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 top-10 mt-0 text-1xl font-semibold text-white ml-20 text-5xl font-semibold text-white">Sami Fares</h2>
  <ul className="">
      <li>About</li>
      <li>Projects</li>
      <li>Experience</li>
      <li>Resume</li>
      <li>Contact</li>
  </ul>
</div>
  )
}

export default NavBar