import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from "axios"
import { Container } from "react-bootstrap";
LoginScreen.propTypes = {
    
};

function LoginScreen(props) {
    const [user, setUser] = useState({email: "", password: ""});
    
    const submitHandle = e => {
          e.preventDefault();
          const response = axios.post(
            "http://localhost:5000/login",
            {
                email: user.email,
                password: user.password,
            },
            { "Content-Type": "application/json" }
        );
        console.log("response",response);
      //   if(response.data.token != null){
      //     alert("Login successful");
      //     localStorage.setItem("user", response.data.token);
      //     localStorage.setItem("name", response.data.user.name);
      //   }else if (response.data.message === null) {
      //     console.log("error");
      //     this.setState({ err: response.data.err });
      // }

    }
    return (
      <form onSubmit = {submitHandle}>
        <div className = "Title">
            <div className="col-md-6 m-auto">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">
                    Email that you have used while registration.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-check">
                  <input type="checkbox" name="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary float-right" onClick = {submitHandle}>
                  Login
                </button>
              </form>
            </div>
        </div>
      </form>  
    );
}


export default LoginScreen;