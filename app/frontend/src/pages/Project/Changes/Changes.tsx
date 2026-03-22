import { FC } from 'react';
import './Changes.scss';
import { ChangedTrack } from '../../../shared/types/Changes';
import type { Changes } from '../../../shared/types/Changes';

type ChangesProps = {
	currentlySelectedChangedTrack: ChangedTrack | null;
};
const Changes: FC<ChangesProps> = ({ currentlySelectedChangedTrack }) => {
	const ChangesItems: JSX.Element[] = [];

	if (!currentlySelectedChangedTrack) {
		return (
			<div id='Changes'>
				<div className='error'>
					₍^. .^₎⟆
					<div className='welcome'>Welcome to Gitton.</div>
				</div>
			</div>
		);
	}

	for (let change of currentlySelectedChangedTrack.changes) {
		const changeType: Changes = change.type;
		const changeTypeClass = changeType.toLowerCase();

		const ChangeItem: JSX.Element = (
			<li className={`change ${changeTypeClass}`}>
				<div className='property'>{change.property}:</div>
				<div className='difference'>
					{changeType === 'ADD' && (
						<div className='final'>{change.final}</div>
					)}

					{changeType === 'EDIT' && (
						<>
							<div className='init'>{change.init}</div>
							<div className='right_arrow'>&#8594;{/* → */}</div>
							<div className='final'>{change.final}</div>
						</>
					)}

					{changeType === 'DELETE' && (
						<>
							<div className='init'>{change.init}</div>
						</>
					)}
				</div>
			</li>
		);

		ChangesItems.push(ChangeItem);
	}

	return (
		<div id='Changes'>
			<ul className='changes'>{ChangesItems}</ul>
		</div>
	);
};

export default Changes;
