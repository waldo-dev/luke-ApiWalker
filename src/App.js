import { Router } from '@reach/router';
import './App.css';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/:personId"/>
        <Home default/>
      </Router>
    </div>
  );
}

export default App;
