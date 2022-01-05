import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Score from './components/Score';
import Deck from './components/Deck';

function App() {

	const [startWar, setStartWar] = useState(false);
	const [cardValues, setCardValues] = useState({
		card1: 0,
		card2: 0
	});
	const [score, setScore] = useState({
		player1: 0,
		player2: 0
	});
	const [gameWon, setGameWon] = useState(false)

	function newCardValues() {
		
		const newValues = {
			card1: Math.ceil( Math.random() * 12 ),
			card2: Math.ceil( Math.random() * 12 )
		}
		return newValues;
	}

	const firstUpdate = useRef(true);
	useEffect(() => {

		if( ! gameWon ) {
			if(cardValues.card1 === cardValues.card2) {
				setStartWar(true);
			} else {
				if(cardValues.card1 > cardValues.card2) {
					setScore( prevScore => ({
						...prevScore,
						player1: prevScore.player1 + 1
					}))
				} else {
					setScore( prevScore => ({
						...prevScore,
						player2: prevScore.player2 + 1
					}))
				}
				setStartWar(false);
			}
		}

		// on first render, start war should be false
		if (firstUpdate.current) {
			firstUpdate.current = false;
			setStartWar(false);
		}
	}, [cardValues, gameWon, startWar]);

	useEffect(() => {
		setGameWon( prevState => score.player2 >= 25 || score.player1 >= 25 && ! prevState);
	}, [score])

	function dealCards() {
		setCardValues(newCardValues());
	}

	return (
		<div className="App">
			<Header />
			<Deck values={cardValues} dealCards={dealCards} war={startWar} gameWon={gameWon} />
			<Score score={score} />
		</div>
	);
}

export default App;
