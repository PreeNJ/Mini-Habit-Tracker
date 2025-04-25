import React from "react";
import { useHabits } from "./hooks/useHabits";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import ProgressSummary from "./components/ProgressSummary";

const App = () => {
  const {
    habits,
    totalCompleted,
    addHabit,
    incrementHabit,
    deleteHabit,
    resetHabits,
  } = useHabits();

  return (
    <main className="container">
      <h1>Mini Habit Tracker</h1>

      <AddHabitForm onAdd={addHabit} />

      <ProgressSummary
        total={habits.length}
        completed={totalCompleted}
        onReset={resetHabits}
      />

      <HabitList
        habits={habits}
        onInc={incrementHabit}
        onDelete={deleteHabit}
      />
    </main>
  );
};

export default App;
