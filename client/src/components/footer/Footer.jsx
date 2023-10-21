import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css"


export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="top-f">
                <div className="topLeft-f">
                    <ul className="topList-f">
                        <li className="topListItem-f">
                            <Link className="link-footer" to="/">
                            HOME
                            </Link>
                        </li>
                        <li className="topListItem-f">
                            <Link className="link-footer" to="/about">
                            ABOUT
                            </Link>
                        </li>
                        <li className="topListItem-f">
                            <Link className="link-footer" to="/">
                            CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <div className="topCenter-f">
                    <i className="topIcon fab fa-facebook-square"></i>
                    <i className="topIcon fab fa-twitter-square"></i>
                    <i className="topIcon fab fa-pinterest-square"></i>
                    <i className="topIcon fab fa-instagram-square"></i>
                </div>
            </div>
            <div className="down-f">
                <p className="down-f-item">Blog Voyage &copy; 2022</p>
            </div>
        </div>
        
    </>
  )
}
