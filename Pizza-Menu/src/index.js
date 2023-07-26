import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia Bread",
    ingredients: "Bread with italian olive oil",
    price: 20,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Tomatto Pizza",
    ingredients: "Tomato and Cheese",
    price: 50,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Cheese Pizza",
    ingredients: "Tomato, Bread, spinach, and cheese",
    price: 70,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Onion Pizza",
    ingredients: "Tomato, Bread, mushrooms, and onion",
    price: 90,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 100,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Paneer Pizza",
    ingredients: "Tomato, Paneer, Onion, olive oil and cheese",
    price: 130,
    photoName: "pizzas/paneer.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        //react fragments
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our store oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarelia, spinach, and ricotta cheese"
        price={10}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms,"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj}.price</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeOur = 22;
  const isOpen = hour >= openHour && hour <= closeOur;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeOur={closeOur} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you btween {openHour}:00 and {closeOur}:00
        </p>
      )}
    </footer>
  );
  //return React.createElement("footer", null, "we are currently open!");
}

function Order({ closeOur, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closeOur}:00 Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App/>);
