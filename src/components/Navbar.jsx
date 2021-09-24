import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const links = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/dashboard",
        title: "Dashboard"
    },{
        to: "/login",
        title: "Login"
    },
    // {
    //     to: "/settings",
    //     title: "Settings"
    // },
    
]

export const Navbar = () => {
    return (
        <div className="navbar">

            {links.map(({to,title}) => {
                return <div key={title}>
                    <Link to={to}>{title}</Link>
                </div>
            })}
            
        </div>
    )
}
