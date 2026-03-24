import { Project } from '../../../shared/types/Project';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import './Sidebar.scss';
import { ProjectChanges_examples } from '../../../data/examples/Changes';
import { ChangesCategories } from './ChangesCategories';
import { CommitPanel } from './CommitPanel';
import { ChangedTrack } from '../../../shared/types/Changes';
import { SelectedRepo } from './SelectedRepo';

type SidebarProps = {
	project_name: Project['name'];
	currentlySelectedChangedTrack: ChangedTrack | null;
	setCurrentlySelectedChangedTrack: Dispatch<
		SetStateAction<ChangedTrack | null>
	>;
	projects: Array<Project>;
};
const Sidebar: FC<SidebarProps> = ({
	project_name,
	currentlySelectedChangedTrack,
	setCurrentlySelectedChangedTrack,
	projects,
}) => {
	const [isRepoExpanded, setIsRepoExpanded] = useState<boolean>(false);

	return (
		<div id='Sidebar'>
			<SelectedRepo
				isRepoExpanded={isRepoExpanded}
				setIsRepoExpanded={setIsRepoExpanded}
				project_name={project_name}
				projects={projects}
			/>

			{!isRepoExpanded && (
				<>
					<ChangesCategories
						currentlySelectedChangedTrack={
							currentlySelectedChangedTrack
						}
						setCurrentlySelectedChangedTrack={
							setCurrentlySelectedChangedTrack
						}
						project_changes={ProjectChanges_examples}
					/>
					<CommitPanel project_name={project_name} />
				</>
			)}
		</div>
	);
};

export default Sidebar;
