import React from 'react';
import PropTypes from 'prop-types';

const ScheduleFormDropdown = ({ id, items, selectedItem, onClick, isDisabled }) => {
	const attrs = {
		className: 'btn btn-default dropdown-toggle',
		type: 'button',
		'data-toggle': 'dropdown',
		'aria-haspopup': true,
		'aria-expanded': true,
	};

	if (isDisabled) {
		attrs.className += ' disabled';
	}

	return (
		<div className="dropdown">
			<button id={id} {...attrs}>
				<div className="selected-item">{selectedItem.title}</div>
			</button>
			<ul className="dropdown-menu" aria-labelledby={id}>
				{items.map((item) => (
					<li key={item.id}>
						<a onClick={() => onClick(item.id)}>{item.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

ScheduleFormDropdown.propTypes = {
	id: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedItem: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
	isDisabled: PropTypes.bool,
};

export default ScheduleFormDropdown;
