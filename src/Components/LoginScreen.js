import React from 'react';
// import PropTypes from 'prop-types';

LoginScreen.propTypes = {
    
};

function LoginScreen(props) {
    return (
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
                <button type="submit" className="btn btn-primary float-right">
                  Login
                </button>
              </form>
            </div>
        </div>
    );
}

export default LoginScreen;