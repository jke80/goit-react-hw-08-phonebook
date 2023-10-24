import { NavLink } from "react-router-dom";

export const Navigation=()=>{
    return(
    <nav>
        <NavLink to='/goit-react-hw-08-phonebook/'>Home</NavLink>
        <NavLink to='/goit-react-hw-08-phonebook/contacts'>Contacts</NavLink>
    </nav>
    );
}