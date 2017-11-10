import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const TasksRow = ({ title, taskList, resourceId, types, editTask }) => {
	return (
		<div className="st-tasks-row row">
			<div className="st-row-title col-md-2">
				<div className="base-title">{title}</div>
			</div>
			<div className="st-task-list-wrapper col-md-10">
				<div className="st-task-list">
					{taskList.map((task) => {
						const taskType = types.taskTypes.find((type) => type.id === task.typeId);
						return (
							<Task
								key={`${resourceId}_${task.id}`}
								title={taskType.title}
								type={taskType.type}
								task={task}
								resourceId={resourceId}
								editTask={editTask}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

TasksRow.propTypes = {
	title: PropTypes.string.isRequired,
	taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
	resourceId: PropTypes.number.isRequired,
	types: PropTypes.object.isRequired,
	editTask: PropTypes.func.isRequired,
};

export default TasksRow;
