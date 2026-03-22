import '../../assets/icons/als.webp';

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

export function ChangedTrackIconAndAlt(changed_track: ChangedTrack): {
	icon_path: string;
	alt: string;
} {
	switch (changed_track.itemType) {
		case 'Meta':
			return {
				icon_path: '/src/assets/icons/als.webp',
				alt: '',
			};
		case 'Midi Track':
			return {
				icon_path: '',
				alt: '🎹',
			};
		case 'Audio Track':
			return {
				icon_path: '',
				alt: '🔉',
			};
	}
}
