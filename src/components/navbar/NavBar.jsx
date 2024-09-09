// import { useEffect, useRef, useState } from "react";

import { logo } from "../../assets/index";
import { navData } from "../../constant";
import { Outlet, Link } from "react-router-dom";

export default function NavBar({ amount,notice }) {
  // Page hook
  return (
    <>
      <div className="cotainer navigation sticky-top ">

        <nav className="navbar navbar-expand-md border-bottom " id="mainNavBar">
            <div className="container-fluid border-highlight border-1">
              <Link to="/" className="navbar-brand">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "75px", height: "75px" }}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse align-self-center"
                id="menu"
            >

              <ul className="navbar-nav menu mx-auto">
                  {navData.map(({ id, link, content }) => (
                    
                    <li
                      key={id}
                      className="nav-item text-uppercase"
                    >
                      <a href={"#" + link} className="nav-link">
                        {content}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          {/* Carts */}
          <div className="icon">
            <Link  to="/CartPage">
              <div className="icon-shop">
                <span className={notice ? "stock execute" : "stock"} >
                  {amount < 10 ? amount + "\u00A0" : "9+"}
                </span>
                <i className="bi bi-cart-fill "></i>
              </div>
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
