import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import '../styles/Main.css';
import logo from "../assets/img/logov2.png";
import {Link} from "react-router-dom";

const NavbarMain = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="nav">

            <div className="logo-div">
                <img src={logo} className="logo-main"/>

            </div>

            <Link to={"/login"} className="link">
                Zaloguj się
            </Link>
            <Link to={"/register"} className="link">
                Rejestracja
            </Link>
            <button className="add-adv"
            >
                <a href="/AddAnnouncement" className="link">Dodaj ogłoszenie +</a>
            </button>

        </div>
    )
}

export default NavbarMain