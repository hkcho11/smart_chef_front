import { useNavigate,useLocation } from "react-router-dom";
import "./style/Common.css"; // 스타일 파일 
import "./style/Stat.css"; // 스타일 파일 

export default function Stat(){
    return (
    <div className="Stat-layout">

      {/* Sidebar */}
        <nav className="side-nav">
        <div className="logo">Smart Chef</div>
        <NavItem label="냉장고" path="/fridge" />
        <NavItem label="레시피" path="/recipe" />
        <NavItem label="통계" path="/stat" />
        <NavItem label="가족" path="/family" />
        <NavItem label="설정" path="/setting" />
   
      </nav>
    

      {/* Main */}
      <main className="Stat-content">
        <header className="Stat-header">
          <h2>12월 통계 대시보드</h2>
        </header>

        {/* KPI Zone */}
        <section className="kpi-grid">
          {/* KPI 카드 */}
          <div className="kpi-card">
            <h4>💰 이번 달 식비</h4>
            <p className="kpi-value">127,500원</p>
            <span className="kpi-sub-text">↓ 12,000원 절약 (전월 대비)</span>
          </div>

          <div className="kpi-card">
            <h4>🗑 폐기율</h4>
            <p className="kpi-value green">3.2%</p>
            <span className="kpi-sub-text">우수 (목표: 5% 이하)</span>
          </div>

          <div className="kpi-card">
            <h4>🍳 요리 횟수</h4>
            <p className="kpi-value">15회</p>
            <span className="kpi-sub-text">활용률 97%</span>
          </div>
        </section>

        {/* Chart + Top3 */}
        <section className="charts-grid">
          {/* Chart */}
          <div className="chart-card">
            <h4>📈 월별 식비 추이</h4>
            <div className="chart-placeholder"></div>
            <span className="chart-sub-text">목표 150,000원 대비 85% 달성</span>
          </div>

          {/* Top3 */}
          <div className="chart-card">
            <h4>🗑 자주 버리는 재료 TOP 3</h4>
            <ul className="top3-list">
              <li>1. 🥬 상추 <span>3회</span></li>
              <li>2. 🥛 우유 <span>2회</span></li>
              <li>3. 🍞 식빵 <span>2회</span></li>
            </ul>
          </div>
        </section>

        {/* Achievement */}
        <section className="achievement-card">
          <h4>🏆 이번 달 성과</h4>
          <div className="badge-list">
            <span>🥇 요리왕</span>
            <span>🥈 절약왕</span>
            <span>🥉 제로폐기</span>
          </div>
        </section>
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