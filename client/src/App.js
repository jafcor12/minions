import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MinionList from './components/MinionList';
import EditMinion from './components/EditMinion';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/minions/:id'>
          <EditMinion />
        </Route>
        <Route path='/minions/new'>
          <EditMinion />
        </Route>
        <Route path='/minions' >
          <MinionList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

    // <Home />
  );
}

export default App;
