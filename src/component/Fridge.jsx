import React, { useState, useEffect } from "react";
import "../style/Fridge.css";
import "../style/Common.css";
import Sidebar from "./Sidebar";
import ingreDientData from "../mock/ingreDient.json";
import IngreDientAddModal from "../modal/IngreDientAddModal.jsx";
import ConfirmDeleteModal from "../modal/ConfirmDeleteModal.jsx";
import { deleteIngredient } from "../api/ingreDientAddApi";

export default function Fridge({ children }) {
  const [ingreDients, setIngreDient] = useState([]);
  const [storages, setStorage] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [allItems, setAllItems] = useState([]); // 이거 날라감 카테고리 선택하면 그래서 추가함
  const [search, setSearch] = useState("");

  //모달 불러올 때 넣고
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(null);

  const getDDay = (expiryDate) => {
    const today = new Date();
    const target = new Date(expiryDate);

    const diff = target - today; // ms
    const d = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return d; // 음수면 어카노;;  수정 해야함
  };

  useEffect(() => {
    const processed = ingreDientData.map((item) => ({
      ...item,
      dDay: getDDay(item.expiryDate),
      //emoji: 이거 나중에
      count: item.quantity || "-",
    }));

    setAllItems(processed);
    setIngreDient(processed);
    setStorage(["전체", "냉동", "냉장", "실온"]);
  }, []);

  const onCategoryClick = (storage) => {
    setActiveCategory(storage);
    applyFilter(storage, search);
  };

  const groupByCategory = (items) => {
    const groups = {};
    items.forEach((item) => {
      const key = item.category || "기타";
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });

    return groups;
  };

  const applyFilter = (storage, keyword) => {
    let filtered = allItems;

    if (storage !== "전체") {
      filtered = filtered.filter((item) => item.storage === storage);
    }

    if (keyword.trim() !== "") {
      filtered = filtered.filter((item) => item.name.includes(keyword));
    }

    setIngreDient(filtered);
  };

  const urgentItems = allItems.filter((item) => item.dDay <= 10);

  const handleDelete = async (id) => {
  try {
    await deleteIngredient(id);

    setIngreDient((prev) =>
      prev.filter((item) => item.id !== id)
    );

    setAllItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  } catch (e) {
    alert("삭제 실패");
  }
};

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        {children}

        <main className="fridge-content">
          {/* Top Bar */}
          <div className="top-bar">
            <input
              className="search-box"
              placeholder="재료 검색..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                applyFilter(activeCategory, value);
              }}
            />
            <button className="add-btn" onClick={() => setShowModal(true)}>
              + 추가
            </button>
            {showModal && (
              <IngreDientAddModal onClose={() => setShowModal(false)} />
            )}
          </div>

          {/* Title */}
          <h2 className="title">나의 냉장고</h2>

          {/* Category Filter */}
          <div className="tabs">
            {storages.map((storage) => (
              <button
                key={storage}
                className={`tab ${storage === activeCategory ? "active" : ""}`}
                onClick={() => onCategoryClick(storage)}
              >
                {storage}
              </button>
            ))}
          </div>

          <div className="warning">
            <div className="warning-title-area">
              <div className="warning-header">
                ⚠️ 유통기한 임박 및 지난 재료 ({urgentItems.length}개)
              </div>
              <div className="recipe-recommend">
                <button className="link-btn">레시피 추천 →</button>
              </div>
            </div>

            <div className="warning-tags">
              {urgentItems.map((item) => (
                <span
                  className={`warning-tag ${item.dDay < 0 ? "expired" : ""}`}
                >
                  {item.emoji || "⚠️"} {item.name}
                </span>
              ))}
            </div>
          </div>

          <div className="items-grid">
            {Object.entries(groupByCategory(ingreDients)).map(
              ([category, items]) => (
                <div key={category} className="category-block">
                  <div className="category-header">
                    {category} ({items.length})
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className="item-row">
                      <span className="item-name">
                        {item.emoji} {item.name}
                      </span>

                      <div className="item-right">
                        <span
                          className={`expiry ${
                            item.dDay < 0 ? "expired" : "normal"
                          }`}
                        >
                          {item.dDay < 0
                            ? "⚠️ 유통기한 지남"
                            : `D-${item.dDay}`}
                        </span>

                        <button
                          className="delete-btn"
                          onClick={() => setDeleteModal(item)}
                          aria-label="delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}
            <ConfirmDeleteModal
              item={deleteModal}
              onCancel={() => setDeleteModal(null)}
              onConfirm={() => {
                handleDelete(deleteModal.id);
                setDeleteModal(null);
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
