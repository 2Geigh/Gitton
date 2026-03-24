import { FC } from 'react';

const RepositoryActions: FC = () => {
	return (
		<>
			<div id='RepositoryActions'>
				<button id='addProject'>Track new project</button>

				<div id='searchBox'>
					<div id='searchIcon'>🔎</div>
					<input
						type='text'
						name='repoSearch'
						id='repoSearch'
						placeholder='Filter'
					/>
				</div>
			</div>
		</>
	);
};

export const ToggleableMenu: FC = () => {
	return (
		<>
			<div id='ToggleableMenu'>
				<RepositoryActions />
			</div>
		</>
	);
};
