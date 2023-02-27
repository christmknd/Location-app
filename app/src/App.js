import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MapComponent/>
      <Footer/>
    </div>
  );
}

export default App;
