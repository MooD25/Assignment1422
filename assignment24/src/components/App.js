
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
//import BestSeller from "./BestSeller";
//import ProdCat from "./ProdCat";

const App =()=>{
  const [products, setProducts] = useState([{}])

  useEffect(()=>{

    fetch("https://rest-api-shopmart.herokuapp.com/products?bestSeller=yes")
    .then(response=> response.json())
    .then(json=>{
  
      console.log(json.data);
      setProducts(json.data)
  
    })
    .catch(err=>{
      console.log(`Error ${err}`);
    })

  })


  return (
    <>
    <Header/>
    <main>
      <Hero/>
    </main>
    <Footer/>
    </>
  )
}

export default App;