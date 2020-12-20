import React from 'react';
import '../component/navbar.css'
import { NavLink } from 'react-router-dom';
import {NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <NavLink className="navbar-brand" to="#">
                Logo
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/"
                    >
                      Home <span className="sr-only ">(current)</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      Downloads
                    </NavLink>
                  </li>
                  <li>
                    <NavDropdown title="Company" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li>
                    <button className="btn">Schedule A Demo</button>
                  </li>
                </ul>
              </div>
            </nav>
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
