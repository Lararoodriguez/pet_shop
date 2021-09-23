import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/general/Header';
import Main from './components/general/Main';
import Footer from './components/general/Footer';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCartContainer from './components/ItemCartContainer';
import { CardContext } from "./components/CartContex";
import ItemCheckout from './components/ItemCheckout';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404';




function App() {
  const [data, setData] = useState({
    items: [],
    quantity: 0
  })

  return (
    <CardContext.Provider value={[data, setData]}>
    <BrowserRouter>
      <Header/>

      <Main> 
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:category_name">
            <ItemListContainer />
          </Route>
          <Route exact path="/detail/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <ItemCartContainer />
          </Route>
          <Route exact path="/checkout">
            <ItemCheckout />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error404 /> 
          </Route>
      </Switch>
      </Main>

      <Footer />
    </BrowserRouter>
    </CardContext.Provider>
  );
}

export default App;