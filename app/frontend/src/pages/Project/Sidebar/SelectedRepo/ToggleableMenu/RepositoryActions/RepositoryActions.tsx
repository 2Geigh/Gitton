import { Dispatch, FC, SetStateAction, useState } from 'react';

type RepositoryActionsProps = {
	setSearchFilter: Dispatch<SetStateAction<string>>;
};
export const RepositoryActions: FC<RepositoryActionsProps> = ({
	setSearchFilter,
}) => {
	const [newAlsFileToTrack, setNewAlsFileToTrack] = useState<string>('');

	const AlsFileUploadErrorMessages = {
		incorrectFileType: 'File must be of type `.als`',
	};
	const [alsFileUploadError, setAlsFileUploadError] = useState<null | string>(
		null,
	);

	return (
		<>
			<div id='RepositoryActions'>
				<div id='addProject'>
					{newAlsFileToTrack && !alsFileUploadError && (
						<button>Track new project</button>
					)}

					{!newAlsFileToTrack && (
						<label htmlFor='newProjectFile'>
							Track new project
						</label>
					)}

					{alsFileUploadError && (
						<span className='warning'>{alsFileUploadError}</span>
					)}
					<input
						id='newProjectFile'
						type='file'
						name='newProjectFile'
						accept='.als'
						onChange={(e) => {
							const uploaded = e.target.value;

							console.log(uploaded);
							console.log(uploaded.slice(-4));

							if (uploaded.slice(-4) !== '.als') {
								setAlsFileUploadError(
									AlsFileUploadErrorMessages.incorrectFileType,
								);
								alert(
									AlsFileUploadErrorMessages.incorrectFileType,
								);
								return;
							}

							setAlsFileUploadError(null);
							setNewAlsFileToTrack(uploaded);
						}}
					/>
				</div>

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
