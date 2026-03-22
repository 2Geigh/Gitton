import { ProjectChanges } from './Changes';

export type Commit = {
	id: number;
	name: string;
	description: string;
	changes: ProjectChanges;
};
