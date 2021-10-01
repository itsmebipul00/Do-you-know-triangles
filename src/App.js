import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Hypotenuse from './components/Hypotenuse/Hypotenuse'
import IsTriangle from './components/IsTriangle/IsTriangle'
import Area from './components/Area/Area'
import Quiz from './components/Quiz/Quiz'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/isTriangle" component={IsTriangle}/>
        <Route exact path="/area" component={Area}/>
        <Route exact path="/hypotenuse" component={Hypotenuse}/>
        <Route exact path="/quiz" component={Quiz}/>
      </Switch>
    </Router>
  );
}

export default App;
