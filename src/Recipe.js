import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./style/Recipe.css"; // 스타일 파일 
import "./style/Common.css"; // 스타일 파일 
import recipeData from "./mock/recipe.json";

export default function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('전체');

  useEffect(() => {
    setRecipes(recipeData);
    setCategories(['전체', '한식', '양식', '중식', '일식']);
  }, []);

  const onCategoryClick = (category) => {
    console.log("Category Click:", category);

    setActiveCategory(category);

    if(category === '전체') {
      setRecipes(recipeData);
    } else {
      setRecipes(recipeData.filter(recipe => recipe.category === category));
      console.log("Recipes:", recipes);
    }
  };

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
          {categories.map((category) => (
            <button 
              key={category}
              className={category === activeCategory ? 'active' : ''}
              onClick={() => onCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        

        {/* 레시피 그리드 */}
        <div className="recipe-grid">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <div className="card-img">{recipe.emoji}</div>
                <h3>{recipe.name}</h3>
                ⭐ {recipe.rating} | {recipe.time} | {recipe.difficulty}
                <div className="tag">{recipe.ingredientPercent}% 재료 보유</div>
              </div>
            ))
          ) : (
            <div className="recipe-card">
              레시피가 없습니다.
            </div>
          )}
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