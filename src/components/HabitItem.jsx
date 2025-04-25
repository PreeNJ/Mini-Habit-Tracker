import React from "react";
import PropTypes from "prop-types";

const HabitItem = ({ habit, onInc, onDelete }) => (
  <li className="card item">
    <span>{habit.title}</span>
    <span className="count">{habit.count}</span>
    <button onClick={() => onInc(habit.id)}>+1</button>
    <button onClick={() => onDelete(habit.id)}>🗑</button>
  </li>
);

HabitItem.propTypes = {
  habit: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.number,
  }),
};

export default HabitItem;
