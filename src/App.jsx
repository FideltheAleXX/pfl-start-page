import './App.css';
import Hero from './components/Hero/Hero';
import Matches from './components/matches/Matches';
import SliderTheClubs from './components/SliderTheClubs/SliderTheClubs';

function App() {
  return (
    <div className="app">
      <Hero />
      <SliderTheClubs />
      <Matches />
    </div>
  );
}

export default App;
