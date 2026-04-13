import './App.css';
import Hero from './components/hero/Hero';
import Matches from './components/matches/Matches';
import News from './components/news/News';
import Results from './components/results/Results';
import SliderTheClubs from './components/sliderTheClubs/SliderTheClubs';
import Standings from './components/standings/Standings';
import Disqualified from './components/disqualified/Disqualified';
import Goals from './components/goals/Goals';
import VideoSection from './components/video-section/VideoSection';
import Sponsors from './components/sponsors/Sponsors';

function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <SliderTheClubs />
        <Matches />
        <News />
        <div className="title">VBET Перша ліга</div>
        <div className="container">
          <Standings />
          <Results />
        </div>
        <div className="container">
          <Disqualified />
          <Goals />
        </div>
        <VideoSection />
      </main>
      <Sponsors />
    </div>
  );
}

export default App;
