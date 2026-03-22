export type ChangedTrack = {
	id: number;
	name: string;
	itemType: 'Midi Track' | 'Audio Track' | 'Meta';
	changeType: 'MODIFIED' | 'DELETED' | 'ADDED';
	changes: Array<{
		property: string;
		init: number | null;
		final: number | null;
		type: 'EDIT' | 'DELETE' | 'ADD';
	}>;
	color?: string;
};

export type ProjectChanges = Array<ChangedTrack>;
