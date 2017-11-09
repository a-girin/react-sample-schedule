import React from 'react';
import PropTypes from 'prop-types';

import ScheduleTableRow from './ScheduleTableRow';

const getHours = () => {
	const hours = [];

	for (let i = 0; i <= 24; i++) {
		hours.push(i);
	}

	return hours;
};

const hours = getHours();

const ScheduleTable = ({ types, resources, editTask }) => {
	return (
		<div className="schedule-table">
			<div className="container-fluid">
				<div className="st-heading row">
					<div className="st-title col-md-1">Resource \ Time</div>
					<div className="col-md-11">
						<div className="st-hours-wrap">
							{hours.map((hour) => (
								<div
									className="st-hour"
									key={hour}
									style={{ left: hour / 24 * 100 + '%' }}
								>
									{hour}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="st-tasks-wrap row">
					<div className="container-fluid">
						{resources.map(({ id, title, tasks }) => (
							<ScheduleTableRow
								title={title}
								taskList={tasks}
								resourceId={id}
								types={types}
								editTask={editTask}
								key={id}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

ScheduleTable.propTypes = {
	types: PropTypes.object.isRequired,
	resources: PropTypes.arrayOf(PropTypes.object).isRequired,
	editTask: PropTypes.func.isRequired,
};

export default ScheduleTable;
