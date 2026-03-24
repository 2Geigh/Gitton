import { Dispatch, FC, SetStateAction } from 'react';
import type { Project } from '../../../../shared/types/Project';
import { ToggleableMenu } from './ToggleableMenu';

type SelectedRepoProps = {
	isRepoExpanded: boolean;
	setIsRepoExpanded: Dispatch<SetStateAction<boolean>>;
	project_name: Project['name'];
};
export const SelectedRepo: FC<SelectedRepoProps> = ({
	isRepoExpanded,
	setIsRepoExpanded,
	project_name,
}) => {
	const triangleArrow = {
		up: <>&#9650;</>, // ▲
		down: <>&#9660;</>, // ▼
	};

	return (
		<>
			<div
				id='SelectedRepo'
				className={isRepoExpanded ? 'expanded' : ''}
			>
				<div
					id='currentRepo'
					onClick={() => {
						setIsRepoExpanded(!isRepoExpanded);
					}}
				>
					<div id='name'>{project_name}</div>
					<div id='dropdownArrow'>
						{isRepoExpanded ? triangleArrow.up : triangleArrow.down}
					</div>
				</div>

				{isRepoExpanded && <ToggleableMenu />}
			</div>
		</>
	);
};
