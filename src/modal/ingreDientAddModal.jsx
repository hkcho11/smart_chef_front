import "../style/ingreDientAddModal.css";
import { useState } from "react";

export default function IngredientAddModal({ onClose, onConfirm }) {
  const [storage, setStorage] = useState("냉장");
  const [isSaving, setIsSaving] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("채소류");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("개");
  const [expiryDate, setExpiryDate] = useState("");

  const handleConfirm = () => {
    const newIngredient = {
      name,
      category,
      quantity: `${quantity}${unit}`, //객체로 묶어보내기
      expiryDate,
      storage,
    };

    console.log("보낼 객체", newIngredient); //  newIngredient 객체 타입으로 보냈음

    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      onConfirm?.(newIngredient);
      onClose();
    }, 800);
  };

  return (
    <div className="iam-backdrop">
      <div className="iam-container">
        <div className="iam-header">
          <h2>재료 등록</h2>
          <button className="iam-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="iam-body">
          <div className="iam-row">
            <label>재료명 *</label>
            <input
              type="text"
              placeholder="예) 당근"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div
            className="iam-row iam-two-col"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <div>
              <label>카테고리 *</label>
              <select>
                <option>채소류</option>
                <option>육류</option>
                <option>유제품</option>
                <option>과일</option>
                <option>냉동식품</option>
              </select>
            </div>

            <div>
              <label>수량</label>
              <div className="iam-quantity-row">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <option>개</option>
                  <option>팩</option>
                  <option>g</option>
                  <option>kg</option>
                </select>
              </div>
            </div>
          </div>

          {/* 유통기한 */}
          <div className="iam-row">
            <label>유통기한 *</label>
            <div className="iam-expiry-row">
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
              <span className="iam-dday">D+5</span>
            </div>
          </div>

          {/* 저장 위치 */}
          <div className="iam-row">
            <label>보관 위치</label>
            <div className="iam-storage-buttons">
              {["냉장", "냉동", "실온"].map((item) => (
                <button
                  key={item}
                  className={`iam-storage ${storage === item ? "active" : ""}`}
                  onClick={() => setStorage(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="iam-footer">
          <button className="iam-cancel" onClick={onClose}>
            취소
          </button>
          <button
            className={`iam-confirm ${isSaving ? "loading" : ""}`}
            onClick={handleConfirm}
            disabled={isSaving}
          >
            {isSaving ? "저장중..." : "등록하기"}
          </button>
        </div>
      </div>
    </div>

    
    
  );

}

