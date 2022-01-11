import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const activeStyle = {color:"#F15B2A"};

    return ( 
    <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>Orders</NavLink>{" | "}
        <NavLink to="/tasks" activeStyle={activeStyle} >Tasks                                                                                                                                                                          </NavLink>
    </nav>
     );
}
 
export default Header;