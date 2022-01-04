import CardPlayer1 from "./CardPlayer1";
import CardPlayer2 from "./CardPlayer2";

export default function Deck(params) {
    // console.log(params.values)
    return (
        <div className="deck">
            <CardPlayer1 value={params.values.card1} />
            <CardPlayer2 value={params.values.card2} />

            {params.war && 'its war time'}

            <button onClick={params.dealCards}>{params.war ? 'Go to war!' : 'Deal'}</button>
        </div>
    )
};
