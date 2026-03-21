import { FC } from 'react';
import './Changes.scss';
import { ChangedTrack } from '../../../data/examples/Changes';

type ChangesProps = {
	currentlySelectedChangedTrack: ChangedTrack | null;
};
const Changes: FC<ChangesProps> = ({ currentlySelectedChangedTrack }) => {
	const ChangesItems: JSX.Element[] = [];

	if (currentlySelectedChangedTrack) {
		for (let change of currentlySelectedChangedTrack.changes) {
			const ChangeItem: JSX.Element = (
				<li className='change'>
					<div className='property'>{change.property}:</div>
					<div className='difference'>
						{change.final && (
							<>
								{change.init && (
									<>
										<div className='init'>
											{change.init}
										</div>
										<div className='rightArrow'>
											&#8594;{/* → */}
										</div>
									</>
								)}
								<div className='final'>{change.final}</div>
							</>
						)}
					</div>
				</li>
			);

			ChangesItems.push(ChangeItem);
		}
	}

	return (
		<div id='Changes'>
			<ul className='changes'>{ChangesItems}</ul>
		</div>
	);
};

export default Changes;
