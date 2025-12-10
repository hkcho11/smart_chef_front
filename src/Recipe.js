import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./style/Recipe.css"; // 스타일 파일 
import "./style/Common.css"; // 스타일 파일 

export default function Recipe() {

  return (
    <div className="layout">
      {/* === Sidebar === */}    
         <nav className="side-nav">
        <div className="logo">Smart Chef</div>
        <NavItem label="냉장고" path="/fridge" />
        <NavItem label="레시피" path="/recipe" />
        <NavItem label="통계" path="/stat" />
        <NavItem label="가족" path="/family" />
        <NavItem label="설정" path="/setting" />
       
      </nav>

      {/* === Recipe Page === */}
      <main className="recipe-container">
         <div className="top-bar">
          <input className="search-box" placeholder="레시피 검색..." />
          <button className="add-btn">+ 추가</button>
        </div>
        {/* 검색 영역 */}
        <div className="search-area">
          <div className="title">🔍 레시피 추천</div>
          <div className="actions">
            <button>AI 추천</button>
            <button>검색</button>
          </div>
        </div>

        {/* 긴급 배너 */}
        <div className="urgent-banner">
          🔥 유통기한 임박 재료로 만들 수 있는 요리<br />
          🥛 우유, 🥬 배추, 🍖 돼지고기 → 김치찌개 추천!
        </div>

        {/* 카테고리 버튼 */}
        <div className="category-tabs">
          <button className="active">전체</button>
          <button>한식</button>
          <button>양식</button>
          <button>중식</button>
          <button>일식</button>
        </div>

        {/* 레시피 그리드 */}
        <div className="recipe-grid">
          <div className="recipe-card">
            <div className="card-img">🍳</div>
            <h3>김치볶음밥</h3>
            ⭐ 4.8 | 15분 | 쉬움
            <div className="tag">100% 재료 보유</div>
          </div>

          <div className="recipe-card">
            <div className="card-img">🍲</div>
            <h3>된장찌개</h3>
            ⭐ 4.5 | 20분 | 쉬움
            <div className="tag">80% 재료 보유</div>
          </div>

          {/* 앞으로 여기 데이터 map으로 출력 */}
        </div>
      </main>
    </div>
  );

    function NavItem({ label, path }) {
  const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className="nav-item"
      onClick={() => {
        console.log("Click:", label, path);
        if(path!==location.path) navigate(path) ;  
      }}
    >
      {label}
    </div>
  )
}
}