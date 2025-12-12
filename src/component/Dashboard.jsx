import { useState, useEffect } from "react";
import "../style/DashBoard.css";
import "../style/Common.css";
import Sidebar from "./Sidebar";
import ingreDientData from "../mock/ingreDient.json";

export default function Dashboard({ children }) {
  const [nearExpiry, setNearExpiry] = useState({}); // {카테고리: [재료들]}

  useEffect(() => {
    const today = new Date();

    //  얘도 공통단으로 빼는게 좋을듯
    const getDDay = (dateStr) => {
      const expiry = new Date(dateStr);
      const diff = expiry - today;
      return Math.ceil(diff / (1000 * 60 * 60 * 24)); // 일수
    };

    const filtered = ingreDientData
      .map((item) => ({
        ...item,
        dDay: getDDay(item.expiryDate),
      }))
      .filter((item) => item.dDay <= 10 && item.dDay >= 0);

    const grouped = filtered.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    setNearExpiry(grouped);
  }, []);

  const notifications = [
    { text: "우유 유통기한 임박!", time: "2시간 전" },
    { text: "계란이 곧 상해요!", time: "어제" },
  ];

  return (
    /* --- 사이드바 공통단 --- */
    <div className="layout">
      <Sidebar />

      {/* 사이드바 공통단 */}
      <div className="content">
        {children}

        {/* 메인 */}
        <div className="main">
          <header className="top-bar">
            <NotificationsBell count={notifications.length} />
            <UserProfile />
          </header>

          {/* 유통기한이 10일 이내인 것들만 보여주기 */}
          {/* 1. 전체 재료 json 파일 가져오기*/}
          {/* 2. 유통기한 계산식  */}
          {/* 3. 계산식에서 D-10 일 이내인것들만 추리기 */}
          {/* 4. 현재 화면에 카테고리별로 뿌려주기 */}

          <div className="dashboard-grid">
            <section className="panel">
              <h2>유통기한 임박 재료</h2>

              {/* 상단 경고 박스 */}
              <div className="alert-box">
                <span>⚠ 유통기한 임박</span>
                <span className="desc">
                  {Object.values(nearExpiry)
                    .flat()
                    .slice(0, 5) // 5개만 보여주기 나중에 갯수 늘려도 됨
                    .map((i) => `${i.name} D-${i.dDay}`)
                    .join(" | ")}
                </span>
              </div>

              {/* 카테고리 그룹 */}
              {Object.keys(nearExpiry).map((category) => (
                <div className="category" key={category}>
                  <strong>
                    {category} ({nearExpiry[category].length})
                  </strong>

                  {nearExpiry[category].map((item) => (
                    <div className="item" key={item.id}>
                      <span>
                        {item.name} {item.quantity}
                      </span>
                      <span className="date">D-{item.dDay}</span>
                    </div>
                  ))}
                </div>
              ))}
            </section>

            <section className="panel">
              <h2>추천 레시피</h2>
              <div className="recipe-box">
                <RecipeCard title="김치볶음밥" rate="★4.8 | 15분" />
                <RecipeCard title="된장찌개" rate="★4.5 | 20분" />
              </div>
            </section>

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
    </div>
  );
}

/* --- Components --- */

function RecipeCard({ title, rate, onClick }) {
  return (
    <div
      className="recipe-card"
      onClick={() => {
        onClick?.();
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
