import { useLocation, useNavigate } from "react-router-dom";
import "./style/Fridge.css"; // CSS는 따로!
import "./style/Common.css"; // 스타일 파일 (아래에 CSS 붙여줄게)

export default function Fridge() {

  return (
    <div className="layout">
      {/* Left Side Navigation */}
      <nav className="side-nav">
        <div className="logo">Smart Chef</div>
        <NavItem label="냉장고" path="/fridge" />
        <NavItem label="레시피" path="/recipe" />
        <NavItem label="통계" path="/stat" />
        <NavItem label="가족" path="/family" />
        <NavItem label="설정" path="/setting" />
      </nav>

      {/* Main */}
      <main className="content">
        {/* Top Bar */}
        <div className="top-bar">
          <input className="search-box" placeholder="재료 검색..." />
          <button className="add-btn">+ 재료 추가</button>
        </div>

        {/* Title */}
        <h2 className="title">나의 냉장고</h2>

        {/* Category Filter */}
        <div className="tabs">
          <button className="tab active">전체</button>
          <button className="tab">냉장</button>
          <button className="tab">냉동</button>
          <button className="tab">실온</button>
        </div>

        {/* Expiring Section */}
        <div className="warning">
          <div>⚠️ 유통기한 임박 재료 (3개)</div>
          <button className="link-btn">레시피 추천 →</button>
        </div>

        {/* Item Grid */}
        <div className="items-grid">
          <div className="item-card">
            <div className="category-title">채소류 (5)</div>
            <div className="item">🥕 당근 — 5개 · D-5</div>
            <div className="item">🧅 양파 — 3개 · D-7</div>
            <div className="item">🥔 감자 — 8개 · D-10</div>
            <div className="item">🥬 배추 — 1포기 · D-14</div>
            <div className="item">🧄 마늘 — 10쪽 · D-20</div>
          </div>

          <div className="item-card">
            <div className="category-title">육류/해산물 (4)</div>
            <div className="item">🍗 닭가슴살 — 500g · D-4</div>
            <div className="item">🐖 돼지고기 — 300g · D-3</div>
            <div className="item">🐟 고등어 — 2마리 · D-5</div>
            <div className="item">🦐 새우 — 200g · D-30</div>
          </div>

          <div className="item-card">
            <div className="category-title">유제품 (3)</div>
            <div className="item">🥛 우유 — 1L · D-1</div>
            <div className="item">🧀 치즈 — 200g · D-14</div>
            <div className="item">🥚 계란 — 30개 · D-10</div>
          </div>
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




