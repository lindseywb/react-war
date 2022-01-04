import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Score from './components/Score';
import Deck from './components/Deck';

function App() {

  const [startWar, setStartWar] = useState(false);
  const [cardValues, setCardValues] = useState(newCardValues());

  function newCardValues() {
    
    const newValues = {
      card1: Math.ceil( Math.random() * 12 ),
      card2: Math.ceil( Math.random() * 12 )
    }
    return newValues;
  }

  useEffect(() => {
    if(cardValues.card1 === cardValues.card2) {
      setStartWar(true)
    } else {
      setStartWar(false)
    }
  }, [cardValues])

  function dealCards() {
    setCardValues(newCardValues())
  }

  return (
    <div className="App">
      <Header />
      <Deck values={cardValues} dealCards={dealCards} war={startWar} />
      <Score />
    </div>
  );
}

export default App;
