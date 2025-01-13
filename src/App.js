import logo from './logo.svg';
import './App.css';
import Overview from './Components/Overview.js';
import Calculator from './Components/Calculator';
import { Routes , Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Memories from './Components/Memories.js';
import Onboard from './Components/Onboard.js';
import Projects from './Components/Projects';
import PersonDetails from './Data/HomeData'
import { useState } from 'react';
import { DataContext } from './Components/Contexts.js';
import Home from './Components/Home.js'
import Weather from './Components/Weather.js';
import Mobiles from './Components/Mobiles.js';
import Laptops from './Components/Laptops.js';
import TV from './Components/TV.js';


function App() {

  const[data,setData] = useState(PersonDetails)
  const[auth , setAuth] = useState(false)
  const [btnText, setBtnTxt] = useState('Login')

  return (
    <div className="App">
      <DataContext.Provider value={{ data , setData , auth , setAuth , btnText , setBtnTxt}}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/onboard' element={<Onboard />} />
        <Route path='/projects' element={<Projects />}>
          <Route path='mobiles' element={<Mobiles />}/>
          <Route path='laptops' element={<Laptops />}/>
          <Route path='tvs' element={<TV />}/>
        </Route>
        <Route path='/memories' element={<Memories />}/>
        <Route path='/weather' element={<Weather />}/>
      </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
