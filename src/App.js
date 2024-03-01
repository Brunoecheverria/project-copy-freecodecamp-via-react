import './App.css';
import Testimonials from './components/Testimonials';
import ShawnWang from './components/ShawnWang';
import SarahChima from './components/SarahChima';
import EmmaBostian from './components/EmmaBostian';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
      <h1>This is what the students say about freeCodeCamp:</h1>

        <ShawnWang />

        <SarahChima />

        <EmmaBostian />
        
      </div>
    </div>
  );
}

export default App;
