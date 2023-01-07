import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/E_commerce/login';
import Counter from "./components/ReduxExample/Counter"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// import { BrowserRouter, Routes, Route } from "react-router-dom"


// import Userdisplay from './components/RoutingTasks/userDisplay';
// import ClickMe from './components/RoutingTasks/clickme';
import store from "./Redux/store"
import { Provider } from 'react-redux';
import UncontrolledExample from './components/E_commerce/carouselLogin';
import NavScrollExample from './components/E_commerce/NavbarLogin';



function App() {
  return (
    <div className="container1">
      
      {/* <Router>
      <button><Link to="/home" >Home</Link></button>
      <button><Link to="/about">About</Link></button>
      
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><About/></Route>
        </Switch>
       </Router>  */}
      
        <Router>
          <Switch>
             {/* <Login/> */}
             {/* <UncontrolledExample/> */}
             {/* <NavScrollExample/> */}
            <Route exact path="/"><Login/></Route>

            <Route path="/carouselLogin"><UncontrolledExample/></Route>
          </Switch>
        </Router>




        

      
    </div>
  );
}

export default App;
