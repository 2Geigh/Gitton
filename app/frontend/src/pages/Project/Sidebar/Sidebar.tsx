import { Project } from '../../../shared/types/Project';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import './Sidebar.scss';
import {
	ChangedTrack,
	ProjectChanges,
	ProjectChanges_examples,
} from '../../../data/examples/Changes';
import ChangesCategories from './ChangesCategories/ChangesCategories';
import CommitPanel from './CommitPanel/CommitPanel';

type SidebarProps = {
	project_name: Project['name'];
	currentlySelectedChangedTrack: ChangedTrack | null;
	setCurrentlySelectedChangedTrack: Dispatch<
		SetStateAction<ChangedTrack | null>
	>;
};
const Sidebar: FC<SidebarProps> = ({
	project_name,
	currentlySelectedChangedTrack,
	setCurrentlySelectedChangedTrack,
}) => {
	const [isRepoExpanded, setIsRepoExpanded] = useState<boolean>(false);

	const triangleArrow = {
		up: <>&#9650;</>, // ▲
		down: <>&#9660;</>, // ▼
	};

	return (
		<div id='Sidebar'>
			<div
				id='repo'
				className={isRepoExpanded ? 'expanded' : ''}
			>
				<div
					id='selectedRepo'
					onClick={() => {
						setIsRepoExpanded(!isRepoExpanded);
					}}
				>
					<div id='name'>{project_name}</div>
					<div id='dropdownArrow'>
						{isRepoExpanded ? triangleArrow.up : triangleArrow.down}
					</div>
				</div>

				{isRepoExpanded && (
					<div id='toggleable'>
						<button id='addProject'>Track new project</button>
						<div id='search'>
							<div id='searchBox'>
								<div id='searchIcon'>🔎</div>
								<input
									type='text'
									name='repoSearch'
									id='repoSearch'
								/>
							</div>
						</div>
					</div>
				)}
			</div>

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
