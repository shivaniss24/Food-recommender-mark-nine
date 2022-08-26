import "./styles.css";
import React from "react";
import { useState } from "react";
var font = "poppins";

var foodDB = {
  Indian: [
    { name: "Pav-bhaji", rating: "Rating : 5/5" },
    { name: "Chole bhatura", rating: "Rating : 3/5" },
    { name: "samosa", rating: "Rating : 4.5/5" },
    { name: "jalebi", rating: "Rating : 4/5" },
    { name: "Gulab-jamun", rating: "Rating : 5/5" }
  ],
  Chinese: [
    { name: "manchurian", rating: "Rating : 5/5" },
    { name: "chaumin", rating: "Rating : 3/5" },
    { name: "momos", rating: "Rating : 3.5/5" },
    { name: "veg kothe", rating: "Rating : 5/5" },
    { name: "Haka-noodles", rating: "Rating : 5/5" }
  ],
  SouthIndian: [
    { name: "Dosa", rating: "Rating : 5/5" },
    { name: "Idli", rating: "Rating : 3/5" },
    { name: "uttapam", rating: "Rating : 3.5/5" },
    { name: "nariyal-chutney", rating: "Rating : 5/5" },
    { name: "sambhar-vada", rating: "Rating : 5/5" }
  ],

  Continental: [
    { name: "fresh-toast", rating: "Rating : 4.5/5" },
    { name: "pancakes", rating: "Rating : 2/5" },
    { name: "french-fries", rating: "Rating : 3.5/5" },
    { name: "cheese-pizza", rating: "Rating : 5/5" },
    { name: "sandwich", rating: "Rating : 5/5" }
  ]
};

// ar food = Object.keys(foodDB);
export default function App() {
  var [selectGenre, setGenre] = useState("Indian");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Food Recommendation App</h1>
      <p
        style={{
          fontFamily: { font },
          margin: "1.5rem auto",
          textAlign: "center"
        }}
      >
        {" "}
        foods in the cafe{" "}
      </p>

      <div style={{ textAlign: "center" }}>
        {Object.keys(foodDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                fontFamily: { font },
                textAlign: "center",
                padding: "1rem",
                width: "70%",
                margin: "auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
