import { ProjectView } from './pages/Project';
import {
	Project_example_1,
	Projects_examples_2,
} from './data/examples/Project';

function App() {
	return (
		<div id='App'>
			<ProjectView
				project={Project_example_1}
				projects={Projects_examples_2}
			/>
		</div>
	);
}

export default App;
