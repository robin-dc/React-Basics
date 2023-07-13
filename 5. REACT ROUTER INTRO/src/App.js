import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import { Route, Switch, NavLink } from 'react-router-dom/cjs/react-router-dom';

function App() {
  const handleClick = () => {
    console.log('Thanks for clicking!')
  };

  return (
    <div className='main'>
      <h1>App Component</h1>
      <NavLink to="/" exact>App</NavLink>
      <br />
      <NavLink exact activeClassName="red" to="/users">Users</NavLink>
      <br />
      <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
      <br />
      <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
      <br />
      <NavLink to="/" exact onClick={handleClick}>App with click handler</NavLink>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
