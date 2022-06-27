import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Page Components
import Navbar from './components/Navbar';
import Home from "./pages/home/Home"
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipes from "./pages/recipes/Recipes";
import ThemeSelector from './components/ThemeSelector';

//Styles
import './App.css'
import { useTheme } from './hooks/useTheme';

function App ()
{
  const { mode } = useTheme();

  return (
    <div className={ `App ${ mode }` }>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create" element={ <Create /> } />
          <Route path="search" element={ <Search /> } />
          <Route path="/recipes/:id" element={ <Recipes /> } />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App