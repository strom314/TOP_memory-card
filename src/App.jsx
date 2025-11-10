import { useState } from "react";
import { Card } from "./components/Card";
import "./app.css"

function App() {
  /*
  cards
  [
  id:
  img:
  clicked:
  ]

  score
  highScore

  handleClick(e){
  id = cards[e.target.id]
  if(cards[id].clicked){
    restartGame()
  }else{
    cards[id].clicked = true;
    }
  }
*/
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

  const [cards, setCards] = useState(
    cardImages.map((img, idx) => ({
      clicked: false,
      id: idx,
      img: `public/img/${img}`,
      name: cardNames[idx],
    }))
  );
  return (
    <>
      <h1>card game</h1>
      <p>score</p>
      <p>high score</p>
      <div className="card-container">
        {cards.map((card) => {
          return <Card name={card.name} img={card.img}></Card>;
        })}
      </div>
      {/* cards.map(() => {
        return <Card img= handleClick= id=>
      }) 
       */}
    </>
  );
}

export default App;
