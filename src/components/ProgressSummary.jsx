import React from "react";

const ProgressSummary = ({ total, completed, onReset }) => (
  <section className="card summary">
    <p>
      Completed {completed}/{total} habits today
    </p>
    {total > 0 && (
      <button className="reset" onClick={onReset}>
        Reset Counts
      </button>
    )}
  </section>
);

export default ProgressSummary;