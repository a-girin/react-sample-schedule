import { UPDATE_TASK, CREATE_TASK } from './actionTypes';

export const saveTask = (resource, task) => ({
	type: resource.oldId ? UPDATE_TASK : CREATE_TASK,
	resource,
	task,
});
