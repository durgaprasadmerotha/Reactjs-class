import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center gap-4">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link> */}

      <NavLink
      style={(e) => e.isActive ? {textDecoration: "underline"} : {}}
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink style={(e) => e.isActive ? {textDecoration: "underline"} : {}} 
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink style={(e) => e.isActive ? {textDecoration: "underline"} : {}}
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink style={(e) => e.isActive ? {textDecoration: "underline"} : {}}
        className={(e) => (e.isActive ? "text-red-500" : "")}
        to="/services"
      >
        Services
      </NavLink>
    </div>
  );
};

export default Nav;
