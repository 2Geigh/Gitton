type Change_Meta<T> = {
	property: string;
	init: T | null;
	final: T | null;
};
type Change_Track<T> = Change_Meta<T> & {
	type: 'EDIT' | 'DELETE' | 'ADD';
};

type Changes_Meta<T> = { changes: Array<Change_Meta<T>> };
type Changes_Track<T> = Array<{
	track_name: string;
	changes: Array<Change_Track<T>>;
}>;

export type ProjectChanges<T> = {
	'Live Session': Changes_Meta<T>;

	'Midi Tracks': Changes_Track<T>;

	'Audio Tracks': Changes_Track<T>;
};
export const ProjectChanges_examples: ProjectChanges<number> = {
	'Live Session': {
		changes: [{ property: 'Tempo', init: 120, final: 128 }],
	},

	'Midi Tracks': [
		{
			track_name: 'Midi Track 1',
			changes: [
				{ property: 'Property X', init: 0, final: 1, type: 'EDIT' },
				{ property: 'Property Y', init: 1, final: 2, type: 'EDIT' },
				{ property: 'Property Z', init: 2, final: 2, type: 'EDIT' },
			],
		},
	],

	'Audio Tracks': [
		{
			track_name: 'Audio Track 3',
			changes: [
				{ property: 'X', init: 102, final: null, type: 'DELETE' }, // deleted
			],
		},
		{
			track_name: 'Audio Track 4',
			changes: [
				{ property: 'thing', init: null, final: -1, type: 'ADD' },
			],
		},
	],
};
