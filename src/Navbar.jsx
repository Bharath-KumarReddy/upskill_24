import React from 'react'

const Navbar = () => {
  return (
    <header className="h-[100px] flex items-center justify-start gap-[5%] text-2xl bg-zinc-100">
    <div className="ml-10">
      <i className="ri-store-fill ri-2x"></i>
    </div>
    <nav className="flex gap-10 ml-10">
      <h2 className="cursor-pointer">Home</h2>
      <h2 className="cursor-pointer">Categories</h2>
      <h2 className="cursor-pointer">About Us</h2>
    </nav>
  </header>
  )
}

export default Navbar
