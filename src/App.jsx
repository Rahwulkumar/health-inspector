import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './styles/App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;