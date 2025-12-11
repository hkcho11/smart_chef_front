import { useNavigate, useLocation } from "react-router-dom";
import "../style/Common.css";

export default function Sidebar() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const path = "/dashboard";

  return (
    <nav className="side-nav">
      <div className="logo"
      style={{cursor: "pointer"}}
       onClick={() => {
        if (path !== location.pathname) navigate(path);
        
      }}>
        Smart Chef
      </div>

      <NavItem label="냉장고" path="/fridge" />
      <NavItem label="레시피" path="/recipe" />
      <NavItem label="통계" path="/stat" />
      <NavItem label="가족" path="/family" />
      <NavItem label="설정" path="/settings" />
    </nav>
  );
}

function NavItem({ label, path }) {
const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="nav-item"
      onClick={() => {
        if (path !== location.pathname) navigate(path);
      }}
    >
      {label}
    </div>
  );
}
