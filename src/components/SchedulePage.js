import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScheduleForm from './ScheduleForm/ScheduleForm';
import ScheduleTable from './ScheduleTable/ScheduleTable';

export default class SchedulePage extends Component {

	constructor(props) {
		super(props);

		this.state = this.initialState;
	}

	initialState = {
		selectedResource: {},
		selectedType: {},
		task: {
			start_time: new Date().setHours(0, 0, 0, 0),
			end_time: new Date().setHours(0, 0, 0, 0),
		},
	};

	editTask = (resourceId, taskId) => {
		const { resources, types } = this.props;

		const selectedResource = resources.find((resource) => resource.id === resourceId);
		const task = selectedResource.tasks.find((task) => task.id === taskId);
		const selectedType = types.taskTypes.find((type) => type.id === task.typeId);

		this.setState({
			selectedResource,
			selectedType,
			task,
		});
	};

	clearTask = () => {
		this.setState(this.initialState);
	};

	render() {
		const { types, resources, saveTask } = this.props;
		const { selectedResource, selectedType, task } = this.state;

		return (
			<div className="schedule-page">
				<ScheduleForm
					types={types}
					resources={resources}
					selectedResource={selectedResource}
					selectedType={selectedType}
					task={task}
					saveTask={saveTask}
					clearTask={this.clearTask}
				/>
				<ScheduleTable types={types} resources={resources} editTask={this.editTask}/>
			</div>
		);
	}
}

SchedulePage.propTypes = {
	types: PropTypes.object.isRequired,
	resources: PropTypes.arrayOf(PropTypes.object).isRequired,
	saveTask: PropTypes.func.isRequired,
};
