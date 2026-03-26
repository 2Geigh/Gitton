import { Dispatch, FC, SetStateAction } from 'react';

type RepositoryActionsProps = {
	setSearchFilter: Dispatch<SetStateAction<string>>;
};
export const RepositoryActions: FC<RepositoryActionsProps> = ({
	setSearchFilter,
}) => {
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
						onChange={(e) => {
							setSearchFilter(e.target.value);
						}}
					/>
				</div>
			</div>
		</>
	);
};
