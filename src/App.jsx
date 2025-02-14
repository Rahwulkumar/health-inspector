import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './styles/App.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;