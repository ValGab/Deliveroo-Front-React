import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
// J'ajoute l'icone Star à ma librairie FA pour l'utiliser
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://deliveroo-back.vercel.app/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response); // différent du error.message d'Express sur back
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <div className="App">
      <Header data={data} />
      <main className="container">
        <Content categories={data.categories} cart={cart} setCart={setCart} />
        <Cart cart={cart} setCart={setCart} restaurant={data.restaurant.name} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
