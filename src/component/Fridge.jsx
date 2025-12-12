import React, { useState, useEffect } from "react";
import "../style/Fridge.css";
import "../style/Common.css";
import Sidebar from "./Sidebar";
import ingreDientData from "../mock/ingreDient.json";
import IngreDientAddModal from "../modal/ingreDientAddModal.jsx";

export default function Fridge({ children }) {
  const [ingreDients, setIngreDient] = useState([]);
  const [storages, setStorage] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [allItems, setAllItems] = useState([]); // 이거 날라감 카테고리 선택하면 그래서 추가함

  //모달 불러올 때 넣고
  const [showModal, setShowModal] = useState(false);

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
    console.log("Category Click:", storage);

    setActiveCategory(storage);

    if (storage === "전체") {
      setIngreDient(allItems);
    } else {
      setIngreDient(allItems.filter((i) => i.storage === storage));
    }
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

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        {children}

        <main className="fridge-content">
          {/* Top Bar */}
          <div className="top-bar">
            <input className="search-box" placeholder="재료 검색..." />
            <button className="add-btn" onClick={() => setShowModal(true)}>+ 추가</button>
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
            <div>⚠️ 유통기한 임박 재료 (3개)</div>
            <button className="link-btn">레시피 추천 →</button>
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
                      <span>
                        {item.emoji} {item.name}
                      </span>
                      <span>D-{item.dDay}</span>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
