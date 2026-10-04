export default function PresetPicker({ presets, onSelect }) {
  return (
    <ul className="preset-list">
      {presets.map((preset) => (
        <li key={preset.id}>
          <button
            type="button"
            className="preset-row"
            aria-label={`${preset.name} ekle`}
            onClick={() => onSelect(preset)}
          >
            <span className="preset-icon" aria-hidden="true">
              {preset.icon}
            </span>
            <span className="preset-name">{preset.name}</span>
            <span className="preset-add plus-icon" aria-hidden="true" />
          </button>
        </li>
      ))}
    </ul>
  );
}
