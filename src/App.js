
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Scrimba</h2>
        <div className="containerReact">
          
        <Contact name="John Doe"
         profession="Architect"
        />
         <Contact name="Luke Barnhill"
         profession="Software Developer"
        />
         <Contact name="Sanjay Dighe"
         profession="Product Manager"
        />
         <Contact name="Katy Simpson"
         profession="UI Designer"
        />
        </div>
      </header>
    </div>
  );
}

export default App;
