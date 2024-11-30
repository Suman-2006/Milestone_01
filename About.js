import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h3> ABOUT US</h3>
        <p>
Welcome to Pedro's Pizzeria – where passion for pizza meets the art of flavor!
At Pedro's Pizzeria, we believe pizza is more than just food; it’s an experience. From our fresh, hand-stretched dough to our signature sauces and premium toppings, every pizza is crafted with love and care. Whether you’re a fan of classic Margherita, adventurous gourmet combinations, or custom creations, we’ve got something for every palate.</p>
<hr></hr>
<b>Our Story</b>
<p>
What started as a small family kitchen with a dream to create the perfect slice has grown into a community favorite. Inspired by traditional recipes and fueled by a love for innovation, we’ve been bringing smiles to tables for 10 years.</p>

<h4>Our Ingredients</h4>
<p>
We source only the finest, freshest ingredients. From locally-grown produce to authentic cheeses, every bite is designed to leave a lasting impression.


Hungry yet?
Explore our menu or visit us today to taste the difference!</p>
      </div>
        
      
    </div>
    
  );
}

export default About;