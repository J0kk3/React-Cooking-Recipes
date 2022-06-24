import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Page Components
import Home from "./pages/home/Home"
import Create from './pages/create/create';
import Search from './pages/search/search';
import Recipes from "./pages/recipe/recipes";

//Styles
import './App.css'

function App ()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipes />
          </Route>
        </Switch>
      </BrowserRouter >
    </div >
  );
}

export default App