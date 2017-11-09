import React from 'react';
import PropTypes from 'prop-types';

import ScheduleTableItem from './ScheduleTableItem';

const ScheduleTableRow = ({ title, taskList, resourceId, types, editTask }) => {
	return (
		<div className="st-task-list-wrap row">
			<div className="st-title col-md-1">{title}</div>
			<div className="col-md-11">
				<div className="st-task-list">
					{taskList.map((task) => {
						const taskType = types.taskTypes.find((type) => type.id === task.typeId);
						return (
							<ScheduleTableItem
								key={`${resourceId}_${task.id}`}
								title={taskType.title}
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

ScheduleTableRow.propTypes = {
	title: PropTypes.string.isRequired,
	taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
	resourceId: PropTypes.number.isRequired,
	types: PropTypes.object.isRequired,
	editTask: PropTypes.func.isRequired,
};

export default ScheduleTableRow;
