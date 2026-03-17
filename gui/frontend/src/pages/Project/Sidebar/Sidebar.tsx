import { Project } from '../../../shared/types/Project';
import { FC } from 'react';
import './Sidebar.scss';

type SidebarProps = {
	project_name: Project['name'];
};
const Sidebar: FC<SidebarProps> = ({ project_name }) => {
	return (
		<div id='Sidebar'>
			<div id='repo'>
				<div id='selectedRepo'>
					<div id='name'>{project_name}</div>
					<div id='dropdownArrow'>▼</div>
				</div>
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
			</div>

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
		</div>
	);
};

export default Sidebar;
