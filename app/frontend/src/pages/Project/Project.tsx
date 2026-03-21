import { FC } from 'react';
import { Project } from '../../shared/types/Project';
import Sidebar from './Sidebar/Sidebar';
import Changes from './Changes/Changes';
import './Project.scss';
import { ProjectChanges } from '../../data/examples/Changes';

type ProjectProps = {
	project: Project;
	changes: ProjectChanges;
};
const ProjectView: FC<ProjectProps> = ({ project, changes }) => {
	return (
		<div id='ProjectView'>
			<Sidebar
				project_changes={changes}
				project_name={project.name}
			/>
			<Changes />
		</div>
	);
};

export default ProjectView;
