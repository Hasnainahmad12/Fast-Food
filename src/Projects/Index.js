import React from "react";
import "./Styles/Index.css";

import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

import piza from "./Images/Piza.jpg";
import piza1 from "./Images/Piza1.jpg";
import piza2 from "./Images/Piza2.jpg";
import piza3 from "./Images/Piza3.jpg";

//import img from "./Images/fast1.jpg";
import img1 from "./Images/fast2.jpg";
import img2 from "./Images/fast3.jpg";
import img3 from "./Images/fast4.jpg";

// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Address from "./Pages/Address";
// import Contact from "./Pages/Contact";
import Main from "./Components/Main";

const data = [
  {
    id: "ID : 1",
    name: "Pizza - University Road",
    pic: piza,
    price: "RS-1250",
    Button: "Click to Order",
  },
  {
    id: "ID : 2",
    name: "Chinese Pizza - University Road",
    pic: piza1,
    price: "RS-1450",
    Button: " Click to Order",
  },
  {
    id: "ID : 3",
    name: "American Pizza - University Road",
    pic: piza2,
    price: "RS-1150",
    Button: "Click to Order",
  },
  {
    id: "ID : 4",
    name: "Zinger Burger - University Road",
    pic: piza3,
    price: "RS-290",
    Button: "Click to Order",
  },
  {
    id: "ID : 5",
    name: "American Burger - University Road",
    pic: img1,
    price: "RS-350",
    Button: "Click to Order",
  },
  {
    id: "ID : 6",
    name: "Burger - University Road",
    pic: img2,
    price: "RS-550",
    Button: "Click to Order",
  },
  {
    id: "ID : 7",
    name: "Zinger Burger - University Road",
    pic: img3,
    price: "RS-200",
    Button: "Click to Order",
  },
  {
    id: "ID : 8",
    name: "Zinger Burger - University Road",
    pic: img1,
    price: "RS-500",
    Button: "Click to Order",
  },
];

const Index = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* 
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Cards />} />
          <Route path="/address" element={<Address />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <br />
*/}

      <Main />

      <br />
      <br />
      <br />
      <h2 className="card__products">Our Products</h2>
      <hr className="my-6 border-blueGray-300" />
      <br />

      <section className="flex flex-wrap gap-5 justify-center ">
        {data.map((it) => {
          return (
            <Cards
              ImgSrc={it.pic}
              Name={it.name}
              id={it.id}
              Button={it.Button}
              price={it.price}
            />
          );
        })}
      </section>

      <br />
      <br />

      <Footer />
    </React.Fragment>
  );
};

export default Index;
