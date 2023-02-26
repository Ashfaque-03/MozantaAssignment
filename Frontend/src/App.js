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
          <Router>
            
            <h1></h1>
            <Routes>
              <Route exact path="/" element={<HomeComponent/>}/>
              <Route exact path="/student/add" element={<StdFormComponent/>}/>
              <Route exact path="/student/details" element={<StdDetailsComponent/>}/>
            </Routes>
          </Router>
        </div>
        
    </div>
  );
}

export default App;
