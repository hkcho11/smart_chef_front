 import { useNavigate } from 'react-router-dom';
import "./style/Login.css"; // CSS는 따로!
function Login() {
  const navigate = useNavigate();

  
  // 로그인 버튼 클릭 시 페이지 이동
   const handleLogin = (e) => {
     e.preventDefault();  // 폼 제출 시 페이지 리로드 방지
  //   // 로그인 성공 로직 후 대시보드로 이동
     navigate("/dashboard");
   }

  const particles = Array.from({ length: 15 });

  return (

  <div className="login">
  

      {/* floating particles */}
      {particles.map((_, idx) => (
        <div
          key={idx}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            width: `${5 + Math.random() * 15}px`,
            height: `${5 + Math.random() * 15}px`,
          }}
        ></div>
      ))}

      <div className="start-card">
        <h1>Smart Chef</h1>
        <button className="start-btn" onClick={(handleLogin)}>START</button>
      </div>
    </div>
  );
    }


export default Login;
