import { useEffect, useState } from "react";
import { initialHabits, presets } from "./data.js";
import HabitListScreen from "./components/HabitListScreen.jsx";
import AddHabitScreen from "./components/AddHabitScreen.jsx";
import DuplicateSheet from "./components/DuplicateSheet.jsx";

const HIGHLIGHT_DURATION_MS = 2000;

export default function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [currentScreen, setCurrentScreen] = useState("habits");
  const [pendingPreset, setPendingPreset] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);

  const existingHabit = pendingPreset
    ? habits.find((habit) => habit.presetId === pendingPreset.id)
    : null;

  useEffect(() => {
    if (highlightedId === null) {
      return;
    }

    const timer = setTimeout(() => setHighlightedId(null), HIGHLIGHT_DURATION_MS);

    return () => clearTimeout(timer);
  }, [highlightedId]);

  function addHabit(preset) {
    const newHabit = {
      id: Date.now(),
      presetId: preset.id,
      name: preset.name,
      icon: preset.icon,
      goal: preset.goal,
      target: preset.target,
    };

    setHabits((currentHabits) => [...currentHabits, newHabit]);
  }

  function handleOpenAddScreen() {
    setCurrentScreen("add");
  }

  function handleBack() {
    setCurrentScreen("habits");
  }

  function handlePresetSelect(preset) {
    const isAlreadyActive = habits.some((habit) => habit.presetId === preset.id);

    if (isAlreadyActive) {
      setPendingPreset(preset);
      return;
    }

    addHabit(preset);
    setCurrentScreen("habits");
  }

  function handleViewExisting() {
    setHighlightedId(existingHabit.id);
    setPendingPreset(null);
    setCurrentScreen("habits");
  }

  function handleAddAnyway() {
    addHabit(pendingPreset);
    setPendingPreset(null);
    setCurrentScreen("habits");
  }

  function handleCancel() {
    setPendingPreset(null);
  }

  function handleReset() {
    setHabits(initialHabits);
    setCurrentScreen("habits");
    setPendingPreset(null);
    setHighlightedId(null);
  }

  return (
    <div className="app">
      {currentScreen === "habits" ? (
        <HabitListScreen
          habits={habits}
          highlightedId={highlightedId}
          onAddClick={handleOpenAddScreen}
        />
      ) : (
        <AddHabitScreen
          presets={presets}
          onSelect={handlePresetSelect}
          onBack={handleBack}
        />
      )}

      <footer className="demo-bar">
        <span>Prototip kontrolü</span>
        <button type="button" className="demo-reset" onClick={handleReset}>
          Demoyu sıfırla
        </button>
      </footer>

      {pendingPreset && (
        <DuplicateSheet
          preset={pendingPreset}
          existingHabit={existingHabit}
          onViewExisting={handleViewExisting}
          onAddAnyway={handleAddAnyway}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
