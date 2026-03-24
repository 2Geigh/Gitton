import { FC, useState } from 'react';
import { Project } from '../../shared/types/Project';
import Sidebar from './Sidebar/Sidebar';
import Changes from './Changes/Changes';
import './Project.scss';
import { ChangedTrack } from '../../shared/types/Changes';

type ProjectViewProps = {
	project: Project;
	projects: Array<Project>;
};

export const ProjectView: FC<ProjectViewProps> = ({ project, projects }) => {
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
				projects={projects}
			/>
			<Changes
				currentlySelectedChangedTrack={currentlySelectedChangedTrack}
			/>
		</div>
	);
};
