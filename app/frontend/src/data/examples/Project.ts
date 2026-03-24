import { Project } from '../../shared/types/Project';

export const Project_example_1: Project = {
	name: 'Electrophoresis Thing',
	bpm: 128,
	ableton_version: 12,

	filepath: '',

	commits: { 0: 1 },
	changes: [],
};

const Project_example_2: Project = {
	name: 'empty',
	bpm: 90,
	ableton_version: 12,
	filepath: '/null',
	commits: {},
	changes: [],
};

export const Projects_examples_0: Array<Project> = [];
export const Projects_examples_1: Array<Project> = [Project_example_1];
export const Projects_examples_2: Array<Project> = [
	Project_example_1,
	Project_example_2,
];
