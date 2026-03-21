import { Dispatch, FC, SetStateAction } from 'react';
import {
	ChangedTrack,
	ProjectChanges,
} from '../../../../data/examples/Changes';

type ChangesCategoriesProps = {
	project_changes: ProjectChanges;
	setCurrentlySelectedChangedTrack: Dispatch<
		SetStateAction<ChangedTrack | null>
	>;
	currentlySelectedChangedTrack: ChangedTrack | null;
};
const ChangesCategories: FC<ChangesCategoriesProps> = ({
	project_changes,
	currentlySelectedChangedTrack,
	setCurrentlySelectedChangedTrack,
}) => {
	let Categories: JSX.Element[] = project_changes.map((changed_track) => {
		const changeType = changed_track.changeType.toLowerCase();

		return (
			<li
				onClick={() => {
					console.log(changed_track.id);
					console.log(changed_track);
					setCurrentlySelectedChangedTrack(changed_track);
				}}
				key={changed_track.id}
				className={`change_category ${changeType} ${currentlySelectedChangedTrack?.id === changed_track.id && 'selected'}`}
			>
				{changed_track.name}
			</li>
		);
	});

	return <ul id='ChangesCategories'>{Categories}</ul>;
};

export default ChangesCategories;
