import HabitCard from "./HabitCard.jsx";

export default function HabitListScreen({ habits, highlightedId, onAddClick }) {
  return (
    <main className="screen">
      <h1 className="screen-title">Alışkanlıklarım</h1>
      <p className="screen-subtitle">{habits.length} aktif alışkanlık</p>

      <ul className="habit-list">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            highlighted={habit.id === highlightedId}
          />
        ))}
      </ul>

      <button
        type="button"
        className="button button-primary add-button"
        onClick={onAddClick}
      >
        <span className="add-button-icon plus-icon" aria-hidden="true" />
        <span className="add-button-label">Yeni alışkanlık ekle</span>
      </button>
    </main>
  );
}
