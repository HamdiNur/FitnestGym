import './App.css';
import Testmonial from './assets/Testmonial/Testmonial';
import Hero from './components/Hero/Hero';
// import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';



function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testmonial/>
      <Join/>
      
    </div>
  );
}

export default App;
