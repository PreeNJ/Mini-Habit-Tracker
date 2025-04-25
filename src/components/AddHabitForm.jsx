import React, { useState } from "react";

const AddHabitForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        aria-label="habit title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New habit..."
      />
      <button>Add</button>
    </form>
  );
};

export default AddHabitForm;
