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
        selectedTask: {},
        task: {
            start_time: new Date().setHours(0, 0, 0, 0),
            end_time: new Date().setHours(0, 0, 0, 0)
        }
    };

    editTask = (resourceId, taskId) => {
        const selectedResource = this.props.resources.find(resource => resource.id === resourceId);
        const task = selectedResource.tasks.find(task => task.id === taskId);
        const selectedTask = this.props.types.taskTypes.find(type => type.id === task.typeId);

        this.setState({
            selectedResource,
            selectedTask,
            task
        });
    };

    clearTask = () => {
        this.setState(this.initialState);
    };

    render() {
        const { types, resources, saveTask } = this.props;
        const { selectedResource, selectedTask, task } = this.state;

        return (
            <div>
                <ScheduleForm
                    types={types}
                    resources={resources}
                    selectedResource={selectedResource}
                    selectedTask={selectedTask}
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
    saveTask: PropTypes.func.isRequired
};
