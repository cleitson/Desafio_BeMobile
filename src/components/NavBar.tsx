import { NavLink } from "react-router";
import Logo from "../icons/Logo"

function NavBar() {
  return (
    <nav className="w-full flex py-4 bg-white p-2.5 gap-2.5 shadow-02">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </nav>
  )
}

export default NavBar