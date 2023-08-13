import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.svg';

export default function Header(){
    return(
        <div className="Nav-bar">
            <div>
            <img src={logo} className="App-logo" alt="logo" />  
            </div>

            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}