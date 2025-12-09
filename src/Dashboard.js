import "./style/DashBoard.css"; // CSS는 따로!
import { useNavigate,useLocation } from "react-router-dom";


export default function Dashboard() {
  const notifications = [
    { text: "우유 유통기한 임박!", time: "2시간 전" },
    { text: "계란이 곧 상해요!", time: "어제" },
  ];




  return (
    <div className="layout">
      {/* --- Left Navigation --- */}
      <nav className="side-nav">
        <div className="logo">Smart Chef</div>
        <NavItem label="냉장고" path="/fridge"  />
        <NavItem label="레시피" path="/recipe" />
        <NavItem label="통계"  path="/stats" />
        <NavItem label="가족" path="/family"/>
        <NavItem label="설정" path="/settings"/>
      </nav>

      

      {/* --- Main Content --- */}
      <div className="main">
        {/* --- Top Bar --- */}
        <header className="top-bar">
          <input
            className="search-input"
            placeholder="재료 검색..."
          />
          <NotificationsBell count={notifications.length} />
          <UserProfile />
        </header>

        {/* --- Dashboard Panels --- */}
        <div className="dashboard-grid">
          {/* 전체 재료 패널 */}
          <section className="panel">
            <h2>전체 재료</h2>
            <div className="alert-box">
              <span>⚠ 유통기한 임박</span>
              <span className="desc">우유 D-1 | 배추 D-2 | 돼지고기 D-3</span>
            </div>

            <div className="category">
              <strong>채소류 (5)</strong>
              <div className="item">
                <span>당근 5개</span>
                <span className="date">D-5</span>
              </div>
              <div className="item">
                <span>양파 3개</span>
                <span className="date">D-7</span>
              </div>
            </div>

            <div className="category">
              <strong>육류 (3)</strong>
              <div className="item">
                <span>닭가슴살 500g</span>
                <span className="date">D-4</span>
              </div>
            </div>
          </section>

          {/* 추천 레시피 */}
          <section className="panel">
            <h2>추천 레시피</h2>
            <div className="recipe-box">
              <RecipeCard title="김치볶음밥" rate="★4.8 | 15분" />
              <RecipeCard title="된장찌개" rate="★4.5 | 20분" />
            </div>
          </section>

          {/* 통계 */}
          <section className="panel">
            <h2>이번 달 통계</h2>
            <div className="stats-row">
              <span>식비 지출</span>
              <strong>127,500원</strong>
            </div>
            <div className="stats-row">
              <span>폐기율</span>
              <strong className="green">3.2%</strong>
            </div>
            <div className="stats-row">
              <span>요리 횟수</span>
              <strong>15회</strong>
            </div>

            <button className="detail-btn">상세보기 →</button>
          </section>
        </div>
      </div>
    </div>
  );
}

/* --- Components --- */

function NavItem({ label,onClick,path}) {

  const navigate = useNavigate();
  const location = useLocation();


  return <div 
  className="nav-item" 
  onClick={()=>{
    console.log("location = pathname 현 path",location.pathname);
    console.log("label path =  클릭 path ",path);
    if(path!==location.path) navigate(path);  
    onClick?.();
  }}
  >{label}</div>;
}

function RecipeCard({ title, rate, onClick }) {
  return (
    <div
      className="recipe-card"
      onClick={() => {
        console.log("Recipe Click:", title);
        onClick?.(); // 부모 이벤트가 있으면 실행
      }}
    >
      <div className="icon">🍳</div>
      <div>{title}</div>
      <span className="rate">{rate}</span>
    </div>
  );
}



function NotificationsBell({ count }) {
  return (
    <button className="bell-btn">
      🔔 <span className="badge">{count}</span>
    </button>
  );
}

function UserProfile() {
  return (
    <div className="profile">
      <div className="avatar">👤</div>
    </div>
  );
}
