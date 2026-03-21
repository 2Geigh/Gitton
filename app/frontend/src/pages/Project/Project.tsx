import { FC, useState } from 'react';
import { Project } from '../../shared/types/Project';
import Sidebar from './Sidebar/Sidebar';
import Changes from './Changes/Changes';
import './Project.scss';
import { ChangedTrack, ProjectChanges } from '../../data/examples/Changes';

type ProjectProps = {
	project: Project;
};
const ProjectView: FC<ProjectProps> = ({ project }) => {
	const [currentlySelectedChangedTrack, setCurrentlySelectedChangedTrack] =
		useState<null | ChangedTrack>(null);

	return (
		<div id='ProjectView'>
			<Sidebar
				project_name={project.name}
				currentlySelectedChangedTrack={currentlySelectedChangedTrack}
				setCurrentlySelectedChangedTrack={
					setCurrentlySelectedChangedTrack
				}
			/>
			<Changes />
		</div>
	);
};

export default ProjectView;
