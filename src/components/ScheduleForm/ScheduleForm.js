import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

import ScheduleFormInput from './ScheduleFormInput';
import ScheduleFormDropdown from './ScheduleFormDropdown';

class ScheduleForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedResource: props.selectedResource,
			selectedTask: props.selectedTask,
			taskList: [],
			task: props.task,
			isTaskExist: false,
		};
	}

	componentWillReceiveProps(props) {
		const { selectedResource, selectedTask, task } = props;
		const isTaskExist = typeof task.id !== 'undefined';

		let taskList = null;

		if (Object.keys(selectedResource).length !== 0) {
			const { rssTypes, taskTypes } = this.props.types;

			const selectedResourceType = rssTypes.find(type => type.id === selectedResource.typeId);
			taskList = taskTypes.filter(type => type.rssTypeId === selectedResourceType.id);
		}

		this.setState({
			selectedResource,
			selectedTask,
			task,
			taskList: taskList || this.state.taskList,
			isTaskExist,
		});
	}

	selectResource = (resourceId) => {
		const selectedResource = this.props.resources.find(rss => rss.id === resourceId);
		const stateSelectedResource = this.state.selectedResource;

		if (!stateSelectedResource.id || stateSelectedResource.id !== selectedResource.id) {
			const { rssTypes, taskTypes } = this.props.types;

			const selectedResourceType = rssTypes.find(type => type.id === selectedResource.typeId);
			const taskList = taskTypes.filter(type => type.rssTypeId === selectedResourceType.id);

			let { selectedTask } = this.state;

			if (!selectedTask || selectedTask.rssTypeId !== selectedResourceType.id) {
				selectedTask = taskList[0];
			}

			this.setState({
				selectedResource,
				selectedTask,
				taskList,
			});
		}
	};

	selectTask = (taskTypeId) => {
		const selectedTask = this.props.types.taskTypes.find(type => type.id === taskTypeId);
		const stateSelectedTask = this.state.selectedTask;

		if (!stateSelectedTask.id || stateSelectedTask.id !== selectedTask.id) {
			this.setState({ selectedTask });
		}
	};

	changeTaskTime = (type, time) => {
		const task = this.state.task;
		const isStart = type === 'start';

		if (!time) {
			this.setState({
				task: {
					...task,
					[`${type}_time`]: isStart ? new Date().setHours(0, 0, 0, 0) : task.start_time,
				},
			});
		} else {
			time = time.valueOf();

			const isCompareValid = isStart ? time > task.end_time : time < task.start_time;

			const validTask = isStart ? {
				...task,
				end_time: time,
				start_time: time,
			} : {
				...task,
				end_time: task.start_time,
			};

			const invalidTask = isStart ? {
				...task,
				start_time: time,
			} : {
				...task,
				end_time: time,
			};

			this.setState({ task: isCompareValid ? validTask : invalidTask });
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.state.isTaskExist ? this.saveTask('update') : this.saveTask();
		this.props.clearTask();
	};

	saveTask = (action = 'create') => {
		const { task: stateTask, selectedTask, selectedResource } = this.state;

		const task = {
			...stateTask,
			typeId: selectedTask.id,
		};

		const resource = {
			id: selectedResource.id,
		};

		if (action === 'update') {
			resource.oldId = this.props.selectedResource.id;
		}

		this.props.saveTask(resource, task);
	};

	clearTask = () => {
		if (this.state.isTaskExist) {
			this.props.clearTask();
		}
	};

	render() {
		const { selectedResource, selectedTask, taskList, task, isTaskExist } = this.state;

		return (
			<form className="schedule-form" onSubmit={this.handleSubmit}>
				<div className="row">
					<ScheduleFormInput label="start time">
						<TimePicker
							format="H:mm"
							showSecond={false}
							value={moment(task.start_time)}
							onChange={time => this.changeTaskTime('start', time)}
						/>
					</ScheduleFormInput>
					<ScheduleFormInput label="end time">
						<TimePicker
							format="H:mm"
							showSecond={false}
							value={moment(task.end_time)}
							onChange={time => this.changeTaskTime('end', time)}
						/>
					</ScheduleFormInput>
				</div>
				<div className="row">
					<ScheduleFormInput label="resource">
						<ScheduleFormDropdown
							id="resource"
							items={this.props.resources}
							selectedItem={selectedResource}
							onClick={this.selectResource}
						/>
					</ScheduleFormInput>
					<ScheduleFormInput label="task">
						<ScheduleFormDropdown
							id="task"
							items={taskList}
							selectedItem={selectedTask}
							onClick={this.selectTask}
							isDisabled={!selectedResource.id}
						/>
					</ScheduleFormInput>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="pull-right">
							<button
								type="submit"
								className="btn btn-primary"
							>
								{typeof task.id === 'number' ? 'Edit' : 'Save'} Task
							</button>
							<button
								type="button"
								className={'btn btn-primary' + (!isTaskExist ? ' disabled' : '')}
								onClick={this.clearTask}
							>
								Clear Task
							</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

ScheduleForm.propTypes = {
	types: PropTypes.object.isRequired,
	resources: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedResource: PropTypes.object,
	selectedTask: PropTypes.object,
	task: PropTypes.object,
	saveTask: PropTypes.func.isRequired,
	clearTask: PropTypes.func.isRequired,
};

export default ScheduleForm;
