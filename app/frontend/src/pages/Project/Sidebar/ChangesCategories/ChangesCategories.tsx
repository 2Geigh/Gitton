import { Dispatch, FC, SetStateAction } from 'react';
import {} from '../../../../data/examples/Changes';
import {
	ChangedTrack,
	ChangedTrackIconAndAlt,
	ProjectChanges,
} from '../../../../shared/types/Changes';

type ChangesCategoriesProps = {
	project_changes: ProjectChanges;
	setCurrentlySelectedChangedTrack: Dispatch<
		SetStateAction<ChangedTrack | null>
	>;
	currentlySelectedChangedTrack: ChangedTrack | null;
};
export const ChangesCategories: FC<ChangesCategoriesProps> = ({
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

					if (
						currentlySelectedChangedTrack?.id === changed_track.id
					) {
						setCurrentlySelectedChangedTrack(null);
					} else {
						setCurrentlySelectedChangedTrack(changed_track);
					}
				}}
				key={changed_track.id}
				className={`change_category ${changeType} ${currentlySelectedChangedTrack?.id === changed_track.id && 'selected'}`}
			>
				<div className='name'>{changed_track.name}</div>
				<img
					src={ChangedTrackIconAndAlt(changed_track).icon_path}
					alt={ChangedTrackIconAndAlt(changed_track).alt}
					className='icon'
				/>
			</li>
		);
	});

	return <ul id='ChangesCategories'>{Categories}</ul>;
};
