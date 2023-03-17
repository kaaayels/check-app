import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import bulogo from './bulogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <img src={bulogo} alt='bulogo'
                className="bulogo"
            />
            <div className="title">
                BICOL &nbsp; <span className="orange-text">{" "} UNIVERSITY</span>
            </div>

            <div className="title2">EVENT MONITORING SYSTEM</div>
            <ul className="NavbarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >

                            <div id="icon">{val.icon} </div>
                            <div id="title">{val.title} </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;