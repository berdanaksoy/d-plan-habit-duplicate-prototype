import PresetPicker from "./PresetPicker.jsx";

export default function AddHabitScreen({ presets, onSelect, onBack }) {
  return (
    <main className="screen">
      <header className="nav-header">
        <button
          type="button"
          className="back-button"
          aria-label="Geri"
          onClick={onBack}
        >
          <span className="back-chevron" aria-hidden="true" />
        </button>
        <h1 className="nav-title">Yeni Alışkanlık Ekle</h1>
      </header>

      <p className="screen-hint">Hazır alışkanlıklardan birini seç.</p>
      <PresetPicker presets={presets} onSelect={onSelect} />
    </main>
  );
}
