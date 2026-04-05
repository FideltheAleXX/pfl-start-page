import './App.css';
import Hero from './components/hero/Hero';
import Matches from './components/matches/Matches';
import News from './components/news/News';
import SliderTheClubs from './components/sliderTheClubs/SliderTheClubs';

function App() {
  return (
    <div className="app">
      <Hero />
      <SliderTheClubs />
      <Matches />
      <News />
    </div>
  );
}

export default App;
