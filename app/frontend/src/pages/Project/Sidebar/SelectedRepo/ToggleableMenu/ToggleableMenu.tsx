import { FC } from 'react';
import { Project } from '../../../../../shared/types/Project';
import { RepositoryActions } from './RepositoryActions';
import { ProjectsList } from './ProjectsList';

type ToggleableMenuProps = { projects: Array<Project> };
export const ToggleableMenu: FC<ToggleableMenuProps> = ({ projects }) => {
	return (
		<>
			<div id='ToggleableMenu'>
				<RepositoryActions />
				<ProjectsList projects={projects} />
			</div>
		</>
	);
};
