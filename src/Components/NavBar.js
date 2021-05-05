import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import LoginScreen from './LoginScreen';

NavBar.propTypes = {
    
};

function NavBar(props) {
    return (
        <div>
            <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/#">
              News24h
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                          Tin tức
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/#">
                          Thể thao
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/#">
                          Văn hóa
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/#">
                          Tài chính
                        </NavLink>
                      </li>
                    </ul>
                    
                    <NavLink className="btn btn-outline-info my-2 my-sm-0" to="/#" >
                      Login
                    </NavLink>
                    <NavLink
                      className="btn btn-outline-info my-2 my-sm-0 ml-3"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </div>
                </nav>
                
                </BrowserRouter>
        </div>
    );
}

export default NavBar;