import CardPlayer1 from "./CardPlayer1";
import CardPlayer2 from "./CardPlayer2";

export default function Deck(params) {
    // console.log(params.values)
    return (
        <div className="deck">
            <div className="cards">
                <CardPlayer1 value={params.values.card1} />
                <CardPlayer2 value={params.values.card2} />
            </div>

            {params.war && <p>its war time</p>}

            { ! params.gameWon && 
                <button onClick={params.dealCards}>{params.war ? 'Go to war!' : 'Deal'}</button>
            }

            {
                params.gameWon && 
                <h4>someone won the game!</h4>
            }
        </div>
    )
};
