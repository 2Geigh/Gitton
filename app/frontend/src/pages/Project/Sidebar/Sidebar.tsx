import { Project } from '../../../shared/types/Project';
import { FC, useState } from 'react';
import './Sidebar.scss';
import {
	ProjectChanges,
	ProjectChanges_examples,
} from '../../../data/examples/Changes';

type CommitPanelProps = { project_name: string };
const CommitPanel: FC<CommitPanelProps> = ({ project_name }) => {
	return (
		<div id='commit'>
			<input
				type='text'
				name='commitName'
				id='commitName'
				placeholder='Commit name'
				required
			/>
			<input
				type='text'
				name='commitDesc'
				id='commitDesc'
				placeholder='Commit description'
			/>
			<input
				id='commitSubmit'
				type='submit'
				value={`Commit ${3} changes to ${project_name}`}
			/>
		</div>
	);
};

type ChangesCategoriesProps = { project_changes: ProjectChanges };
const ChangesCategories: FC<ChangesCategoriesProps> = ({ project_changes }) => {
	let Categories: JSX.Element[] = project_changes.map((changed_track) => {
		const changeType = changed_track.changeType.toLowerCase();

		return (
			<li className={`change_category ${changeType}`}>
				{changed_track.name}
			</li>
		);
	});

	return <ul id='ChangesCategories'>{Categories}</ul>;
};

type SidebarProps = {
	project_name: Project['name'];
	project_changes: ProjectChanges;
};
const Sidebar: FC<SidebarProps> = ({ project_name, project_changes }) => {
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
						project_changes={ProjectChanges_examples}
					/>
					<CommitPanel project_name={project_name} />
				</>
			)}
		</div>
	);
};

export default Sidebar;
