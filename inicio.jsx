import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
    FaBars,
    FaBook,
    FaSistrix,
    FaHome
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../componentes/logo.png';
import { Link } from 'react-router-dom';

const Inicio = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/inicio",
            name: "Inicio",
            icon: <FaHome />
        },
        {
            path: "/",
            name: "Buscar",
            icon: <FaSistrix />
        },
        {
            path: "/biblioteca",
            name: "Biblioteca",
            icon: <FaBook />
        },


    ]
    return (
        <div className="containerR">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div style={{ display: isOpen ? "block" : "none" }} className="logo">
                    <Link to="/">
                        <img className='logo' src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );

}

export default Inicio;