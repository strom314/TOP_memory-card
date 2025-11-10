import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import "./app.css";

function App() {
  const cardImages = [
    "cei-rigotti.webp",
    "lewisGun.webp",
    "m1903marksman.webp",
    "m1918 factory.webp",
    "model10A.webp",
    "mondragon.webp",
    "mp18.webp",
    "selbstlader.webp",
  ];

  const cardNames = [
    "Cei-rigotti",
    "Lewis Gun",
    "M1903 Marksman",
    "M1918 Factory",
    "Model 10A",
    "Mondragon",
    "MP18",
    "Selbstlader",
  ];

  const cards = cardImages.map((img, idx) => ({
    clicked: false,
    id: idx,
    img: `public/img/${img}`,
    name: cardNames[idx],
  }));

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleClick(id) {
    const card = cards.find((card) => card.id === id);
    if (card.clicked) {
      // gameOver();
    } else {
      card.clicked = true;
    }

    setIds(shuffle(ids));
  }

  const [ids, setIds] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  function displayCards() {
    const cardsToDisplay = ids.map(id => cards.find(card => card.id === id));
    
    return cardsToDisplay.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              img={card.img}
              id={card.id}
              handleClick={handleClick}
            ></Card>
          );
        })
  }

  useEffect(() => {
    displayCards();
  }, []);

  return (
    <>
      <h1>card game</h1>
      <p>score</p>
      <p>high score</p>
      <div className="card-container">
        {displayCards()}
      </div>
    </>
  );
}

function shuffle(array) {
  let currentIndex = array.length;
  let newArray = array;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

export default App;
