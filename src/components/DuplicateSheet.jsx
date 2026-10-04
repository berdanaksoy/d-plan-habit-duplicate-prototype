export default function DuplicateSheet({
  preset,
  existingHabit,
  onViewExisting,
  onAddAnyway,
  onCancel,
}) {
  return (
    <>
      <div className="sheet-backdrop" onClick={onCancel} />
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="duplicate-sheet-title"
      >
        <div className="sheet-message">
          <span className="sheet-icon" aria-hidden="true">
            {preset.icon}
          </span>
          <div>
            <h2 id="duplicate-sheet-title" className="sheet-title">
              {preset.name} zaten aktif alışkanlıklarında bulunuyor.
            </h2>
            <p className="sheet-existing">
              Mevcut hedef: <strong>{existingHabit.target}</strong>
            </p>
          </div>
        </div>
        <div className="sheet-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={onViewExisting}
            autoFocus
          >
            Mevcut alışkanlığı görüntüle
          </button>
          <button
            type="button"
            className="button button-secondary"
            onClick={onAddAnyway}
          >
            Yine de ekle
          </button>
          <button
            type="button"
            className="button button-quiet"
            onClick={onCancel}
          >
            Vazgeç
          </button>
        </div>
      </div>
    </>
  );
}
