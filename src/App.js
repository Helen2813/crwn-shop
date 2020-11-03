import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = props => (
  <div>
    <h1>HATS: {props.match.params.topicId}</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/topics' component={HatsPage} />
        <Route path='/topics/:topicId' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
