import { FC } from 'react';

export const RepositoryActions: FC = () => {
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
