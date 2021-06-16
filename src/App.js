//import logo from './logo.svg';
import './App.css';
//import './Components/LoginScreen.js';

import NewsScreen from './Components/NewsScreen';
import Navbar from './Components/NavBar';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {BrowserRouter, NavLink, Route, Router, Switch} from 'react-router-dom';
import NewsPage from './Container/Newspage/NewsPage';
import LoginScreen from './Components/LoginScreen';
import LawPage from './Container/Lawpage/LawPage';
import BusinessPage from './Container/Business/BusinessPage';
import CarPage from './Container/Car/CarPage';
import TechPage from './Container/Tech/TechPage';
import EduPage from './Container/Edu/EduPage';
import SciencePage from './Container/Science/SciencePage';
import EntertainmentPage from './Container/Entertainment/EntertainmentPage';
function App() {
  return (
    <div >
        <Navbar/>
        <BrowserRouter>
          {/* <div className="table-responsive">
          <NewsPage />
          </div>
          <div> */}
                <Switch>
                  <Route exact path = "/" component = {NewsPage}/>
                  <Route path = "/home" component = {NewsPage}/>
                  <Route path = "/login" component = {LoginScreen}/>
                  <Route path = "/laws" component = {LawPage}/>
                  <Route path = "/business" component = {BusinessPage}/>
                  <Route path = "/car" component = {CarPage}/>
                  <Route path = "/tech" component = {TechPage}/>
                  <Route path = "/edu" component = {EduPage}/>
                  <Route path = "/science" component = {SciencePage}/>
                  <Route path = "/entertainment" component = {EntertainmentPage}/>

                </Switch>
                
          {/* </BrowserRouter></div> */}
        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
