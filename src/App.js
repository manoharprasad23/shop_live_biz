import logo from './logo.svg';
//import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Seller from './Components/Seller/Seller';
import './App.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/seller" component={Seller}/>
      </Switch>
      
    </div>
  );
}

export default App;
