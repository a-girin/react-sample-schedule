import React from 'react';
import PropTypes from 'prop-types';

const getPercentFromHours = (value) => {
	return `${value / 1000 / 3600 / 24 * 100}%`;
};

const Task = ({ title, type, task, resourceId, editTask }) => {
	const dayStart = new Date(task.start_time).setHours(0, 0, 0, 0);
	const taskStart = (dayStart - task.start_time) * -1;
	const taskDuration = task.end_time - task.start_time;
	const className = type.replace(/_/g, '-');

	return (
		<div
			className={`st-task ${className}`}
			onClick={() => editTask(resourceId, task.id)}
			style={{
				left: getPercentFromHours(taskStart),
				width: getPercentFromHours(taskDuration),
			}}
		>
			<div className="base-title">{title}</div>
		</div>
	);
};

Task.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	task: PropTypes.object.isRequired,
	resourceId: PropTypes.number.isRequired,
	editTask: PropTypes.func.isRequired,
};

export default Task;
