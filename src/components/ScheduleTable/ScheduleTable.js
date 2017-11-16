import React from 'react';
import PropTypes from 'prop-types';
import TasksRow from './TasksRow';
import { getHours } from '../../tools';

const HOURS = getHours();

const ScheduleTable = ({ types, resources, editTask }) => {
	return (
		<div className="schedule-table container-fluid">
			<div className="st-heading row">
				<div className="st-title col-md-2">
					<div className="base-title">Resource \ Time</div>
				</div>
				<div className="st-hours-wrap col-md-10">
					{HOURS.map((hour) => {
						if (hour % 3 === 0) {
							return (
								<div className="st-hour" key={hour}>
									{hour}
								</div>
							);
						}
						return null;
					})}
				</div>
			</div>
			<div className="st-tasks-wrap row">
				<div className="container-fluid">
					{resources.map(({ id, title, tasks, typeId }, i) => {
						if (!resources[i + 1] || typeId === resources[i + 1].typeId) {
							return (
								<TasksRow
									title={title}
									taskList={tasks}
									resourceId={id}
									types={types}
									editTask={editTask}
									key={`${title}-${id}`}
								/>
							);
						} else {
							return (
								<div key={`${title}-with-separator`}>
									<TasksRow
										title={title}
										taskList={tasks}
										resourceId={id}
										types={types}
										editTask={editTask}
										key={`${title}-${id}`}
									/>
									<div className="row separator-row" key={`${title}-separator`}/>
								</div>
							);
						}
					})}
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
