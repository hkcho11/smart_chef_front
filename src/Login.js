import { useNavigate } from 'react-router-dom';

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
            <div className="sign-in-container">
              <form onSubmit={handleLogin}>
                <h1>Smart Chef</h1>
                <div className="social-links">
                  <div>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </div>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="form_btn">
                  로그인
                </button>
              </form>
            </div>          
          <div className="overlay-container">
            <div className="overlay-left">
              <h1>Welcome Back</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button  className="overlay_btn">
                Sign In
              </button>
            </div>
            <div className="overlay-right">
              <h1>안녕하세요</h1>
              <p>스마트 쉐프님과 즐거운 요리를 즐기세요!</p>
              <button className="overlay_btn">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
