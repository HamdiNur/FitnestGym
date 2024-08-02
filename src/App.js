import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Testmonial from './components/Testmonial/Testmonial';



function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testmonial/>
      
    </div>
  );
}

export default App;
