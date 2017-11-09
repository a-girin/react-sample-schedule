import React from 'react';
import PropTypes from 'prop-types';

const getPercentFromHours = (value) => {
	return `${value / 1000 / 3600 / 24 * 100}%`;
};

const ScheduleTableItem = ({ title, task, resourceId, editTask }) => {
	const dayStart = new Date(task.start_time).setHours(0, 0, 0, 0);
	const taskStart = (dayStart - task.start_time) * -1;
	const taskDuration = task.end_time - task.start_time;

	return (
		<div
			className="st-task"
			onClick={() => editTask(resourceId, task.id)}
			style={{
				left: getPercentFromHours(taskStart),
				border: '1px solid',
				width: getPercentFromHours(taskDuration),
			}}
		>
			{title}
		</div>
	);
};

ScheduleTableItem.propTypes = {
	title: PropTypes.string.isRequired,
	task: PropTypes.object.isRequired,
	resourceId: PropTypes.number.isRequired,
	editTask: PropTypes.func.isRequired,
};

export default ScheduleTableItem;
