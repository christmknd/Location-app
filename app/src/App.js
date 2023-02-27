import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
