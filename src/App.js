import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-back-vg.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response); // contrairement au error.message d'Express sur back
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header data={data} />
      <main className="container">
        <Content categories={data.categories} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
