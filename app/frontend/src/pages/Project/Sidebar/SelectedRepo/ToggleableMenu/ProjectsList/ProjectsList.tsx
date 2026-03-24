import { FC } from 'react';
import { Project } from '../../../../../../shared/types/Project';

type ProjectsListProps = { projects: Array<Project> };

export const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
	let Projects: JSX.Element[] = [];

	if (projects.length > 0) {
		Projects = projects.map((project) => (
			<li className='project'>{project.name}</li>
		));
	}

	return (
		<div id='ProjectsList'>
			<ul>{Projects}</ul>
		</div>
	);
};
