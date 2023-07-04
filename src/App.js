import './App.css';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ClickbaitDetectionSection from './components/ClickbaitDetectionSection';
import ThesisSection from './components/ThesisSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutSection/>
      <ClickbaitDetectionSection/>
      <ThesisSection/>
    </div>
  );
}

export default App;
