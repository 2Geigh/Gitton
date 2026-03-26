import { FC, useState } from 'react';
import { Project } from '../../../../../shared/types/Project';
import { RepositoryActions } from './RepositoryActions';
import { ProjectsList } from './ProjectsList';

type ToggleableMenuProps = { projects: Array<Project> };
export const ToggleableMenu: FC<ToggleableMenuProps> = ({ projects }) => {
	const [searchFilter, setSearchFilter] = useState<string>('');

	return (
		<>
			<div id='ToggleableMenu'>
				<RepositoryActions setSearchFilter={setSearchFilter} />
				<ProjectsList
					projects={projects}
					searchFilter={searchFilter}
				/>
			</div>
		</>
	);
};
