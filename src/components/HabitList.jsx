import { useEffect, useState, useCallback } from "react";
import { loadHabits, saveHabits } from "../utils/storage";

export const useHabits = () => {
  const [habits, setHabits] = useState(() => loadHabits());

  /* ---------- CRUD ---------- */
  const addHabit = (title) =>
    setHabits((prev) => [...prev, { id: crypto.randomUUID(), title, count: 0 }]);

  const incrementHabit = (id) =>
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, count: h.count + 1 } : h))
    );

  const deleteHabit = (id) =>
    setHabits((prev) => prev.filter((h) => h.id !== id));

  const resetHabits = () =>
    setHabits((prev) => prev.map((h) => ({ ...h, count: 0 })));

  /* ---------- Persistence ---------- */
  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  /* ---------- Derived data ---------- */
  const totalCompleted = habits.filter((h) => h.count > 0).length;

  return {
    habits,
    totalCompleted,
    addHabit: useCallback(addHabit, []),
    incrementHabit: useCallback(incrementHabit, []),
    deleteHabit: useCallback(deleteHabit, []),
    resetHabits: useCallback(resetHabits, []),
  };
};
