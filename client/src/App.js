import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MinionList from './components/MinionList';
import EditMinion from './components/EditMinion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/minions/:id' element={<EditMinion />} />
        <Route path='/minions/new' element={<EditMinion />}/>
        <Route path='/minions' element={<MinionList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    // <Home />
  );
}

export default App;
