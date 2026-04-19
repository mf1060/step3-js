//Using React Router with the following reference: https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './ShoppingCart';
import Search from './SearchBar';
import Home from './Home';
import NavBar from './NavBar';
import ItemPage from './ItemPage';

function App() {
   
  return (
    <>
    <BrowserRouter>
        <NavBar />

      <Routes>
        {/*Creating a route for the home page */}
        <Route path="/" element={<Home />} />
        {/*Creating a route for the search bar */}
        <Route path="/Search" element={<Search />} />
        {/*Creating a route for the shopping cart */}
        <Route path="/Cart" element={<Cart />} />

        {/*Creating a route for an ItemPage to each item in the database */}
        {/*This will likely be implemented with a map function in the future */}
        <Route path="/1" element={<ItemPage id="1" />} />
        <Route path="/2" element={<ItemPage id="2" />} />
        <Route path="/3" element={<ItemPage id="3" />} />
        <Route path="/4" element={<ItemPage id="4" />} />
        <Route path="/5" element={<ItemPage id="5" />} />
        <Route path="/6" element={<ItemPage id="6" />} />
        <Route path="/7" element={<ItemPage id="7" />} />
        <Route path="/8" element={<ItemPage id="8" />} />
        <Route path="/9" element={<ItemPage id="9" />} />
        <Route path="/10" element={<ItemPage id="10" />} />
        <Route path="/11" element={<ItemPage id="11" />} />
        <Route path="/12" element={<ItemPage id="12" />} />

      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App;
