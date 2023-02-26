import './App.css';
import HomeComponent from './components/HomeComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import StdFormComponent from './components/StudentFormComponent/StdFormComponent';
import StdDetailsComponent from './components/StudentDetailsComponent/StdDetailsComponent';


function App() {
  return (
    <div className="App">
        <div className="App-header">
          <Router>
            <Routes>
              <Route exact path="/" element={<HomeComponent/>}/>
              {/* <Route path="/student/add" element={<StdFormComponent/>}/>
              <Route path="/student/details" element={<StdDetailsComponent/>}/> */}
            </Routes>
          </Router>
        </div>
        
    </div>
  );
}

export default App;
