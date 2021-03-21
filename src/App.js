import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import HomePage from "./components/pages/HomePage"
import ProductPage from "./components/pages/productspage/ProductPage";
import Men from "./components/pages/men/Men";
import Cart from "./components/pages/Cart/CartPage";
import { Suspense, lazy } from 'react';



function App() {
  return (
      //routes setpu
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/product/:id">
                   <ProductPage/>
                  </Route>
                  <Route path="/men">
                      <Men/>
                  </Route>
                  <Route path="/cart">
                      <Cart/>
                  </Route>
                  <Route path="/">
                      <HomePage/>
                  </Route>
              </Switch>
          </div>
      </Router>


  );
}

export default App;


