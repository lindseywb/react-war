import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Score from './components/Score';
import Deck from './components/Deck';
import GameWon from "./components/GameWon";

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
	const [gameWon, setGameWon] = useState({
		isWon: false,
		whoWon: ''
	})

	function newCardValues() {
		const newValues = {
			card1: Math.ceil( Math.random() * 12 ),
			card2: Math.ceil( Math.random() * 12 )
		}
		return newValues;
	}

	const firstUpdate = useRef(true);
	useEffect(() => {

		if( ! gameWon.isWon ) {
			if(cardValues.card1 === cardValues.card2 ) {
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

		if( score.player2 >= 25 || score.player1 >= 25 ) {
			const winner = score.player1 >= 25 ? 'Computer' : 'You';

			setGameWon( () => {
				return {
					isWon: true,
					whoWon: winner
				}
			});
		}
		
		// setGameWon( prevState => {
		// 	return score.player2 >= 25 || score.player1 >= 25 ? true : false;
		// });
	}, [score])

	function dealCards() {
		setCardValues(newCardValues());
	}

	function resetGame() {
		newCardValues();
		setScore({
			player1: 0,
			player2: 0
		});
		setGameWon({
			isWon: false,
			whoWon: ''
		})
	}

	return (
		<div className="App">
			<Header />
			<div className="game-board">
				<Deck values={cardValues} dealCards={dealCards} war={startWar} gameWon={gameWon.isWon} />
				<div className='game-controls'>
					<Score score={score} />
					{ gameWon.isWon && <GameWon onClick={resetGame} winner={gameWon.whoWon} />}
				</div>
			</div>
		</div>
	);
}

export default App;
