import React from 'react';
import PropTypes from 'prop-types';

const ScheduleFormInput = ({ className, label, children }) => {
    return (
        <div className={className || 'col-md-6'}>
            <div className="sf-label">
                {label}
            </div>
            <div className="sf-input">
                {children}
            </div>
        </div>
    );
};

ScheduleFormInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default ScheduleFormInput;
