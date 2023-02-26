import './App.css';
import HomeComponent from './components/HomeComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StdFormComponent from './components/StudentFormComponent/StdFormComponent';
import StdDetailsComponent from './components/StudentDetailsComponent/StdDetailsComponent';


function App() {
  return (
    <div className="App">
      {/* <img src="/favicon.png" alt="" /> */}
        <div className="App-header">
          <Router basename='/MozantaAssignment'>
            
            <h1></h1>
            <Routes>
              <Route exact path="/MozantaAssignment" element={<HomeComponent/>}/>
              <Route path="/student/add" element={<StdFormComponent/>}/>
              <Route path="/student/details" element={<StdDetailsComponent/>}/>
            </Routes>
          </Router>
        </div>
        
    </div>
  );
}

export default App;
