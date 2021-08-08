import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <nav >
                <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink exact to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            </nav>
            <Friends state={props.state.sidebar}/>
        </div>
        )
}

export default Navbar;