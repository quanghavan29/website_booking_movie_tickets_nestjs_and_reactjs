import './App.css';
import {createBrowserHistory} from 'history'
import { Route, Router } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Detail from './pages/Detail/Detail';
import Hotline from './pages/Hotline/Hotline';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/home" exact Component={Home}/>
      <HomeTemplate path="/contact" exact Component={Contact}/>
      <HomeTemplate path="/news" exact Component={News}/>
      <HomeTemplate path="/hotline" exact Component={Hotline}/>
      <HomeTemplate path="/detail/:movieId" exact Component={Detail}/>

      <Route path="/sign-in" exact Component={SignIn}/>
      <Route path="/sign-up" exact Component={SignUp}/>

      <HomeTemplate path="/" exact Component={Home}/>
    </Router>
  );
}

export default App;
