import { ProjectChanges } from '../../shared/types/Changes';

export const ProjectChanges_examples: ProjectChanges = [
	{
		id: 1,
		name: 'Meta',
		itemType: 'Meta',
		changeType: 'MODIFIED',
		changes: [{ property: 'Tempo', init: 120, final: 128, type: 'EDIT' }],
	},
	{
		id: 2,
		name: 'Midi Track 1',
		itemType: 'Midi Track',
		changeType: 'MODIFIED',
		changes: [
			{ property: 'Property X', init: 0, final: 1, type: 'EDIT' },
			{ property: 'Property Y', init: 1, final: 2, type: 'EDIT' },
			{ property: 'Property Z', init: 2, final: 2, type: 'EDIT' },
		],
	},
	{
		id: 3,
		name: 'Audio Track 3',
		itemType: 'Midi Track',
		changeType: 'DELETED',
		changes: [{ property: 'X', init: 102, final: null, type: 'DELETE' }],
	},
	{
		id: 4,
		name: 'Audio Track 4',
		itemType: 'Midi Track',
		changeType: 'ADDED',
		changes: [{ property: 'thing', init: null, final: -1, type: 'ADD' }],
		color: '#FF94A6',
	},
];
