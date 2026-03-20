type Category = 'Live Session' | 'Midi Tracks' | 'Audio Tracks';

type Change_Delete = 'DELETED';
type Change_Add<T> = { property: string; init: T };
type Change_Edit<T> = { property: string; init: T; final: T };
type Change<T> = Change_Delete | Change_Add<T> | Change_Edit<T>;

type Changes_Meta<T> = { changes: Array<Change<T>> };
type Changes_Track<T> = Array<{
	track_name: string;
	changes: Array<Change<T>>;
}>;
type Changes<T> = Changes_Meta<T> | Changes_Track<T>;

export const Changes: Record<Category, Changes<number>> = {
	'Live Session': {
		changes: [{ property: 'Tempo', init: 120, final: 128 }],
	},

	'Midi Tracks': [
		{
			track_name: 'Midi Track 1',
			changes: [
				{ property: 'Property X', init: 0, final: 1 },
				{ property: 'Property Y', init: 1, final: 2 },
				{ property: 'Property Z', init: 2, final: 2 },
			],
		},
	],

	'Audio Tracks': [
		{
			track_name: 'Audio Track 3',
			changes: ['DELETED'],
		},
		{
			track_name: 'Audio Track 4',
			changes: [{ property: 'thing', init: -1 }],
		},
	],
};
