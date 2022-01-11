import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    // const activeStyle = {color:"#777777"};

    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
        <NavLink className="navbar-brand text-info font-weight-bolder" to="/" style={{marginLeft:"20px"}}  exact>Orders</NavLink>{" | "}
        <NavLink className="navbar-brand text-info font-weight-bolder" to="/tasks"  >Tasks                                                                                                                                                                          </NavLink>
    </nav>
     );
}
 
export default Header;