import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filter = () => {
  const { state } = useContext(AppContext);
  const [query, setQuery] = useState("");

  const filtered = state.activities.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        data-testid="filter-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.map((a) => (
        <div key={a.activityid} data-testid="activity-item">
          {a.name}
        </div>
      ))}
    </div>
  );
};

export default Filter;