import initialState from './initialState';
import * as types from '../actions/actionTypes';

const scheduleReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CREATE_TASK:
			return {
				...state,
				schedule: state.schedule.map((resource) => {
					if (resource.id === action.resource.id) {
						resource.tasks.push({
							...action.task,
							id: resource.tasks.length,
						});
					}

					return resource;
				}),
			};

		case types.UPDATE_TASK:
			return {
				...state,
				schedule: state.schedule.map((resource) => {
					if (action.resource.oldId === action.resource.id) {
						if (resource.id === action.resource.id) {
							resource.tasks = resource.tasks.map((task) => {
								if (task.id === action.task.id) {
									return action.task;
								}

								return task;
							});
						}
					} else {
						if (resource.id === action.resource.oldId) {
							resource.tasks = resource.tasks.filter((task) => task.id !== action.task.id);
						}

						if (resource.id === action.resource.id) {
							resource.tasks.push({
								...action.task,
								id: resource.tasks.length,
							});
						}
					}

					return resource;
				}),
			};

		default:
			return state;
	}
};

export default scheduleReducer;
