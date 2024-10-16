import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <>
    <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/">Home</NavLink>
    <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/about">About</NavLink>
    <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/services">Services</NavLink>
    <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/items">Items</NavLink>
    </>
  )
}

export default Nav
