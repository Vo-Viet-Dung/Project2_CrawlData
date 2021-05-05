//import logo from './logo.svg';
import './App.css';
import LoginScreen from './Components/LoginScreen';
//import './Components/LoginScreen.js';
import NewsScreen from './Components/NewsScreen';
import Navbar from './Components/NavBar';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {BrowserRouter, NavLink, Route, Router} from 'react-router-dom';
function App() {
  return (
    <div >
        <Navbar/>
        <BrowserRouter>
          <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"><NewsScreen/></th>
                <th scope="col"><NewsScreen/></th>
                <th scope="col"><NewsScreen/></th>
                <th scope="col"><NewsScreen/></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><NewsScreen/></th>
                <th scope="row"><NewsScreen/></th>
                <th scope="row"><NewsScreen/></th>
                <th scope="row"><NewsScreen/></th>
              </tr>
              <tr>
              <th scope="row"><NewsScreen/></th>
              <th scope="row"><NewsScreen/></th>
              <th scope="row"><NewsScreen/></th>
              <th scope="row"><NewsScreen/></th>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
                <Route path = "/src/Components/LoginScreen.js" component = {LoginScreen}/>
          </div>
        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
