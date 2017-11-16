import React from 'react';
import PropTypes from 'prop-types';
import { getPercentFromHours, scrollTo } from '../../tools';

const Task = ({ title, type, task, resourceId, editTask }) => {

	const onClick = () => {
		editTask(resourceId, task.id);

		scrollTo('.schedule-form');
	};

	const { start_time, end_time } = task;
	const dayStart = new Date(start_time).setHours(0, 0, 0, 0);
	const taskStart = (dayStart - start_time) * -1;
	const taskDuration = end_time - start_time;
	const className = type.replace(/_/g, '-');

	return (
		<div
			className={`st-task ${className}`}
			onClick={onClick}
			style={{
				left: getPercentFromHours(taskStart),
				width: getPercentFromHours(taskDuration),
			}}
		>
			<div className="base-title" title={title}>{title}</div>
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
