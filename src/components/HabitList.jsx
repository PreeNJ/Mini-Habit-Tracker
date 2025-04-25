import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onInc, onDelete }) => (
  <ul className="list">
    {habits.map((habit) => (
      <HabitItem
        key={habit.id}
        habit={habit}
        onInc={onInc}
        onDelete={onDelete}
      />
    ))}
    {habits.length === 0 && <p>No habits yet – add one above.</p>}
  </ul>
);

export default HabitList;
