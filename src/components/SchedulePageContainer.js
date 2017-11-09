import { connect } from 'react-redux';

import { saveTask } from '../actions/scheduleActions';
import SchedulePage from './SchedulePage';

const mapStateToProps = ({ schedule }) => ({
	types: schedule.types,
	resources: schedule.schedule,
});

export default connect(mapStateToProps, { saveTask })(SchedulePage);
