import { FC } from 'react';

type CommitPanelProps = { project_name: string };
const CommitPanel: FC<CommitPanelProps> = ({ project_name }) => {
	return (
		<div id='CommitPanel'>
			<input
				type='text'
				name='commitName'
				id='commitName'
				placeholder='Commit name'
				required
			/>
			<textarea
				name='commitDesc'
				id='commitDesc'
				placeholder='Commit description'
			></textarea>
			<input
				id='commitSubmit'
				type='submit'
				value={`Commit ${3} changes to ${project_name}`}
			/>
		</div>
	);
};

export default CommitPanel;
