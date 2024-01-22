import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { UseContextExample } from './examples/useContextExample/useContextExample';
import { UseReducerExample } from './examples/useReducerExample';
import { UseRefExample } from './examples/useRefExample';
import { UseStateExample } from './examples/useStateExample';
import { UsingJavascriptExample } from './examples/usingJavascriptExample';
import { UseContextExampleProvider } from './examples/useContextExample/useContextExampleProvider';
import { AnotherComponent } from './examples/useContextExample/AnotherComponent';

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usestate">useState()</Link>
          </li>
          <li>
            <Link to="/useref">useRef()</Link>
          </li>
          <li>
            <Link to="/usereducer">useReducer()</Link>
          </li>
          <li>
            <Link to="/usecontext">useContext()</Link>
          </li>
          <li>
            <Link to="/plainjs">Plain JS</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/usestate">
          <UseStateExample />
        </Route>
        <Route path="/useref">
          <UseRefExample />
        </Route>
        <Route path="/usereducer">
          <UseReducerExample />
        </Route>
        <Route path="/usecontext">
          <UseContextExampleProvider>
            <UseContextExample />
            <AnotherComponent />
          </UseContextExampleProvider>
        </Route>
        <Route path="/plainjs">
          <UsingJavascriptExample />
        </Route>
        <Route path="/">
          <div>
            Pick an example from the nav
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
