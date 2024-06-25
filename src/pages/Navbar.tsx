import { NavLink } from "react-router-dom";
export const Navbar = () => {
    // const navLinkStyles = ( isActive :any) => {
    //     return {
    //       fontWeight: isActive ? 'bold' : 'normal',
    //       textDecoration: isActive ? 'none' : 'underline'
    //     }
    //   }
  return (
    <nav>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/courses" >Courses</NavLink>
    </nav>
  );
};
