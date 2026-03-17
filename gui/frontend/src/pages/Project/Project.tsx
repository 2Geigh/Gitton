import { FC } from 'react';
import { Project } from '../../shared/types/Project';
import Sidebar from './Sidebar/Sidebar';
import Changes from './Changes/Changes';

type ProjectProps = {
	project: Project;
};
const ProjectView: FC<ProjectProps> = ({ project }) => {
	return (
		<div id='ProjectView'>
			<Sidebar project_name={project.name} />
			<Changes />
		</div>
	);
};

export default ProjectView;
