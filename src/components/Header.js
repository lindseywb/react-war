export default function Header() {
    return (
        <header className="App-header">
            <h1>React War</h1>
            <p>Play war against the computer.</p>
            <p>How to play:</p>
            <ol>
                <li>Click "Deal Cards"</li>
                <li>The player with the higher card wins the hand and receives 1 point.</li>
                <li>If both players have the same number card, another card will be dealt to each player.</li>
                <li>The player with the higher card wins the hand and receives 2 points.</li>
                <li>The first player to 20 points wins.</li>
            </ol>
        </header>
    )
};
