import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Maincard from './components/Maincard';
import{ BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Chart from './components/Chart';
function App() {
  return (
    <div className="App">
        <Router>
       <Routes>
       <Route path="/"  element={< Maincard />}></Route>
     <Route path="/home"  element={< Maincard />}></Route>
     <Route path="/chart"  element={< Chart/>}></Route> 

     
     
      {/*<Signup/>*/}
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
