import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <main className='section'>
          <section className='section-center products-page'>
            <Routes>
              <Route path='/' element={<ProductsList />} />
              <Route path='/cart' exact element={<Cart />} />
            </Routes>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
