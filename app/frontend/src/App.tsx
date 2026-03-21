import Project from './pages/Project/Project';
import { Project_example_1 } from './data/examples/Project';
import { ProjectChanges_examples } from './data/examples/Changes';

function App() {
	return (
		<div id='App'>
			<Project project={Project_example_1} />
		</div>
	);
}

export default App;
