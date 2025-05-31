import React from "react";
import "./nav.scss";
import {Link,NavLink} from "react-router-dom";
class Nav extends React.Component {

    render() {

        return (
            <>
                <div className="topnav">
                  <NavLink activateClassName="active"  to="/" exact> Home </NavLink>
                  <NavLink activateClassName="active"  to="/todo"> Todos </NavLink>
                  <NavLink activateClassName="active"  to="/about"> About </NavLink>
                  <NavLink activateClassName="active"  to="/user"> User </NavLink>

                </div>
            </>
        )
    }


}
export default Nav;