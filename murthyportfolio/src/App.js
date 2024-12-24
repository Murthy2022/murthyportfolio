import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Videos from './Components/Videos';
import FormValidation from './Components/FormValidation';
import Projects from './Components/Projects';
import PersonDetails from './Data/HomeData'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        {/* <Route path='/' element={<Home PersonDetails={{PersonDetails}} />} /> */}
        <Route path='/' element={<Home PersonDetails={PersonDetails} />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='formvalidation' element={<FormValidation />} />
        <Route path='projects' element={<Projects />}/>
        <Route path='Videos' element={<Videos/>}/>
      </Routes>
    </div>
  );
}

export default App;
