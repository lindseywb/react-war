import './App.css';
import Header from './components/Header';
import Score from './components/Score';
import Deck from './components/Deck';

function App() {
  return (
    <div className="App">
      <Header />
      <Deck />
      <Score />
    </div>
  );
}

export default App;
