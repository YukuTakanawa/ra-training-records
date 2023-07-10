import React from "react";
import { useState } from "react";
import TrainingCounterForm from "./TrainingCounterForm";
import TrainingCounterTable from "./TrainingCounterTable";

function TrainingCounter() {
  const [walks, setWalks] = useState([]);

  const handleAdd = (walk) => {
    const newWalks = [...walks];
    const sameDate = newWalks.find((o) => o.date === walk.date);

    if (sameDate) {
      sameDate.distance += walk.distance;
    } else {
      newWalks.push(walk);
      newWalks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setWalks(newWalks);
  };

  const handleDelete = (id) => {
    setWalks((prevWalks) => prevWalks.filter((o) => o.id !== id));
  };

  return (
    <div className="walk-counter">
      <TrainingCounterForm onAdd={handleAdd} />
      <TrainingCounterTable walks={walks} onDelete={handleDelete} />
    </div>
  );
}

export default TrainingCounter;