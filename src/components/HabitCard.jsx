import { useEffect, useRef } from "react";

export default function HabitCard({ habit, highlighted }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (highlighted) {
      cardRef.current.scrollIntoView({ block: "center" });
    }
  }, [highlighted]);

  return (
    <li
      ref={cardRef}
      className={highlighted ? "habit-card is-highlighted" : "habit-card"}
    >
      <span className="habit-icon" aria-hidden="true">
        {habit.icon}
      </span>
      <div>
        <h3 className="habit-name">{habit.name}</h3>
        <p className="habit-goal">{habit.goal}</p>
      </div>
    </li>
  );
}
