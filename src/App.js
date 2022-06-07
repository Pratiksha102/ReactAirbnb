import './App.css';
import Contact from './components/Contact';

function App() {

  const pokemons=[
  {name:"John Doe",profession:"Solution Architect"},
  {name:"Hannah Montana",profession:"Singer"}

  ];

  const output= pokemons.map((poks)=>{
    return <Contact name={poks.name} profession={poks.profession}/>; 
  })


	return (
		<div className='App'>
			<header className='App-header'>
				<h2>React Scrimba</h2>
				<div className='containerReact'>
					{output}
				</div>
			</header>
		</div>
	);
}

export default App;
