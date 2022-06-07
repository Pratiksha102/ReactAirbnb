import './App.css';
import Contact from './components/Contact';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h2>React Scrimba</h2>
				<div className='containerReact'>
					<Contact name='John Doe' profession='Architect' key={1} />
					<Contact
						name='Luke Barnhill'
						profession='Software Developer'
						key={2}
					/>
					<Contact name='Sanjay Dighe' profession='Product Manager' key={3} />
					<Contact name='Katy Simpson' profession='UI Designer' key={4} />
				</div>
			</header>
		</div>
	);
}

export default App;
