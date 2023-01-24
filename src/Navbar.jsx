import React from "react";



export default function Navbar(){
    return(
        <section className="header">
            <nav>
                <a href="index.html">
                    <img src="./logo.png" alt="logo" />
                </a>
                {/* <h3 className="nav--title">Tech-eCole</h3> */}
                <input type="text" placeholder="Search for resources"/>
                <button className="hero-btn">SEARCH</button>
                <div className="nav--links">
                    <ul>
                        <li>Track</li>
                        <li>Messages</li>
                        <li>Lab</li>
                        <li>Submission</li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}
