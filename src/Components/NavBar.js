import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, NavLink, Link, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import { Nav, NavItem } from 'react-bootstrap';

NavBar.propTypes = {

};

function NavBar(props) {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/home" className="card-link">
            News24h
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            <Nav.Link href = "/laws">
              Pháp Luật
            </Nav.Link>
            <Nav.Link href = "/edu">
                Giáo dục
            </Nav.Link>
            <Nav.Link href = "/business">
                Tài Chính
            </Nav.Link>
            <Nav.Link href = "/car">
                Xe
            </Nav.Link>  
            <Nav.Link href = "/tech">
                Công Nghệ
            </Nav.Link>
            <Nav.Link href = "/science">
                Khoa Học
            </Nav.Link>
            <Nav.Link href = "/entertainment">
                Giải Trí
            </Nav.Link>
            </ul>
          <NavItem>
          <a href="/login" className="card-link">
              Đăng Nhập
            </a>
          </NavItem>
                  </div>
                </nav>
                
                </BrowserRouter>
        </div >
    );
}

export default NavBar;