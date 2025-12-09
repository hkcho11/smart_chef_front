import { useNavigate } from 'react-router-dom';
import "./style/Login.css"; // CSS는 따로!
function Login() {
  const navigate = useNavigate();

  
  // 로그인 버튼 클릭 시 페이지 이동
  const handleLogin = (e) => {
    e.preventDefault();  // 폼 제출 시 페이지 리로드 방지
    // 로그인 성공 로직 후 대시보드로 이동
    navigate("/dashboard");
  };



  return (
    <div>
      <div className="wrapper">
        <div className="container">         
          <div className="overlay-container">
            <div className="overlay-right">
              <h1>Smart Chef</h1>            
              <button className="overlay_btn"  onClick={handleLogin}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
