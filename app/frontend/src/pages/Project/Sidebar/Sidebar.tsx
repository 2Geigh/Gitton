import { Project } from '../../../shared/types/Project';
import { FC, useState } from 'react';
import './Sidebar.scss';

type SidebarProps = {
	project_name: Project['name'];
};
const Sidebar: FC<SidebarProps> = ({ project_name }) => {
	const [isRepoExpanded, setIsRepoExpanded] = useState<boolean>(false);

	const triangleArrow = {
		up: <>&#9650;</>, // ▲
		down: <>&#9660;</>, // ▼
	};

	return (
		<div id='Sidebar'>
			<div id='repo'>
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
				<div id='commit'>
					<input
						type='text'
						name='commitName'
						id='commitName'
						placeholder='Commit name'
					/>
					<input
						type='text'
						name='commitDesc'
						id='commitDesc'
						placeholder='Commit description'
					/>
					<input
						type='submit'
						value={`Commit ${3} changes to ${project_name}`}
					/>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
