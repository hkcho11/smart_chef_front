import React from "react";
import "../style/DeleteModal.css";

export default function ConfirmDeleteModal({
  item,
  onCancel,
  onConfirm,
}) {
  if (!item) return null;

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">

        <div className="delete-modal-content">
          <span className="delete-modal-item">
            {item.emoji} {item.name}
          </span>
          을(를) 삭제합니다.
        </div>

        <div className="delete-modal-actions">
          <button className="delete-modal-cancel" onClick={onCancel}>
            취소
          </button>
          <button className="delete-modal-delete" onClick={onConfirm}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}