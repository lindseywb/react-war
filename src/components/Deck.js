import CardPlayer1 from "./CardPlayer1";
import CardPlayer2 from "./CardPlayer2";

export default function Deck(params) {
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

        </div>
    )
};
