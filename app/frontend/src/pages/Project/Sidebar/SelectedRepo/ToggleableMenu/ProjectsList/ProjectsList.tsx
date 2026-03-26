import { FC } from 'react';
import { Project } from '../../../../../../shared/types/Project';

type ProjectsListProps = { projects: Array<Project>; searchFilter: string };

export const ProjectsList: FC<ProjectsListProps> = ({
	projects,
	searchFilter,
}) => {
	let Projects: JSX.Element[] = [];

	if (projects.length > 0) {
		Projects = projects.map((project) => {
			if (
				project.name.toLowerCase().includes(searchFilter.toLowerCase())
			) {
				return <li className='project'>{project.name}</li>;
			} else {
				return <></>;
			}
		});
	}

	return (
		<div id='ProjectsList'>
			{Projects.length > 0 ?
				<ul>{Projects}</ul>
			:	<></>}
		</div>
	);
};
