import "../style/ingreDientAddModal.css";

export default function IngredientAddModal({ onClose, onConfirm }) {
  return (
    <div className="iam-backdrop">
      <div className="iam-container">
        <div className="iam-header">
          <h2>재료 등록</h2>
          <button className="iam-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="iam-body">
          {/* 재료명 */}
          <div className="iam-row">
            <label>재료명 *</label>
            <input type="text" placeholder="예) 당근" />
          </div>

          {/* 카테고리 & 수량 */}
          <div className="iam-row iam-two-col">
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
                <input type="number" min="1" defaultValue="1" />
                <select>
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
              <input type="date" />
              <span className="iam-dday">D+5</span>
            </div>
          </div>

          {/* 저장 위치 */}
          <div className="iam-row">
            <label>보관 위치</label>
            <div className="iam-storage-buttons">
              <button className="iam-storage active">냉장</button>
              <button className="iam-storage">냉동</button>
              <button className="iam-storage">실온</button>
            </div>
          </div>
        </div>

        <div className="iam-footer">
          <button className="iam-cancel" onClick={onClose}>취소</button>
          <button className="iam-confirm" onClick={onConfirm}>등록하기</button>
        </div>
      </div>
    </div>
  );
}