import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
library.add(faEnvelope, faStar, faKey, faListAlt);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-back-vg.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response); // contrairement au error.message d'express
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
      <Content categories={data.categories} />
      <Footer />;
    </div>
  );
}

export default App;
