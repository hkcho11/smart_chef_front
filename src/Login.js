import { Component } from "react";

class Login extends Component {

//       constructor(props) {
//     super(props);
//     this.state = {
//       isSignUp: true, // 회원가입 폼/로그인 폼 상태
//     };
//   }

//   toggleForm = () => {
//     this.setState((prevState) => ({
//       isSignUp: !prevState.isSignUp,
//     }));
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // 폼 제출 시의 동작
//     console.log("폼 제출");
//   };


render(){
       const { isSignUp } = true;
       
     return (
           <div>
        <div className="wrapper">
          <div className="container">
            {isSignUp ? (
              <div className="sign-up-container">
                <form onSubmit={this.handleSubmit}>
                  <h1>Create Account</h1>
                  <div className="social-links">
                    <div>
                        {/* 나중에 넣기 주석단건 */}
                      {/* <a href="#"> */}
                        
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      {/* </a> */}
                    </div>
                    <div>
                      {/* <a href="#"> */}
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      {/* </a> */}
                    </div>
                    <div>
                      {/* <a href="#"> */}
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      {/* </a> */}
                    </div>
                  </div>
                  <span>or use your email for registration</span>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="form_btn">
                    회원가입
                  </button>
                </form>
              </div>
            ) : (
              <div className="sign-in-container">
                <form onSubmit={this.handleSubmit}>
                  <h1>Smart Chef</h1>
                  <div className="social-links">
                    <div>
                      {/* <a href="#"> */}
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      {/* </a> */}
                    </div>
                    <div>
                      {/* <a href="#"> */}
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      {/* </a> */}
                    </div>
                    <div>
                      {/* <a href="#"> */}
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      {/* </a> */}
                    </div>
                  </div>
                  <span>or use your account</span>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button type="submit" className="form_btn">
                    login
                  </button>
                </form>
              </div>
            )}
            <div className="overlay-container">
              <div className="overlay-left">
                <h1>Welcome Back</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button onClick={this.toggleForm} className="overlay_btn">
                  Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1>안녕하세요</h1>
                <p>스마트 쉐프님과 즐거운 요리를 즐기세요!</p>
                <button onClick={this.toggleForm} className="overlay_btn">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Login;