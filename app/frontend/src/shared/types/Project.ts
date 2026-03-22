import { ProjectChanges } from './Changes';
import { Commit } from './Commit';

type SystemPath = string;

export type Project = {
	name: string;
	bpm: number;
	ableton_version: number;
	filepath: SystemPath;

	commits: Record<number, Commit['id']>;
	changes: ProjectChanges;
};
