import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { Home, About, Creo, Works, Careers, Contact } from './components';
import Footer from './components/Footer';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll); 
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div  style={{ height:"1000vh" }}>
      <div className="App_header">
            <img className="headerlogo" src="https://blog.creokorea.com//uploads/l_f77a7d016b.png" alt="logo" 
              Link to="/components/About"/>
            <div className="nav">             
                <Link to="/components/About">ABOUT</Link>
                <Link to="/components/Creo">CREO</Link>
                <Link to="/components/Works">WORKS</Link>
                <Link to="/components/Careers">CAREERS</Link>
                <Link to="/components/Contact">CONTACT</Link>             
            </div>
            </div>
      <div className="Main">
        <hr/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/components/About" component={About} />
            <Route path="/components/Creo" component={Creo} />
            <Route path="/components/Works" component={Works} />
            <Route path="/components/Careers" component={Careers} />
            <Route path="/components/Contact" component={Contact} />
            <Route path="/"> Not Found </Route>
          </Switch>
      </div>
    <Footer/>
    </div>   
  );
}

export default App;