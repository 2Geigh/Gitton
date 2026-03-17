import { FC } from 'react';

type ChangesProps = {};
const Changes: FC<ChangesProps> = ({}) => {
	return (
		<div id='Changes'>
			<div
				className='change_item add'
				id='audio-4'
			>
				<div className='header'>Meta</div>
				<ul className='changes'>
					<li className='change'></li>
				</ul>
			</div>
			<div
				className='change_item edit'
				id='midi-1'
			>
				<div className='header'>
					Midi Track: <i>Midi Track 1</i>
				</div>
				<ul className='changes'>
					<li className='change'>
						Property X: <span className='init'>0</span> &#8594;{' '}
						<span className='final'>1</span>
					</li>
					<li className='change'>
						Property Y: <span className='init'>0</span> &#8594;{' '}
						<span className='final'>1</span>
					</li>
					<li className='change'>
						Property Z: <span className='init'>0</span> &#8594;{' '}
						<span className='final'>1</span>
					</li>
				</ul>
			</div>
			<div
				className='change_item delete'
				id='audio-3'
			>
				<div className='header'>
					Audio Track: <i>Audio Track 3</i>
				</div>
			</div>
			<div
				className='change_item add'
				id='audio-4'
			>
				<div className='header'>
					Audio Track: <i>Audio Track 4</i>
				</div>
			</div>
		</div>
	);
};

export default Changes;
