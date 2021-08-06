import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.scss';

const list = [
    { name: "home", path: "/", exact: true },
    { name: "rysiopis", path: "/article" },
    { name: "kontakt", path: "/contact" },
    { name: "panel ryszarda", path: "/richard" }
];



const Navigation = () => {

    const menu = list.map(item => (
        <li className="nav-list__item" key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <nav className="nav">
            <ul className="nav-list">
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation;