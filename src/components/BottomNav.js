import { useNavigate, useLocation } from 'react-router-dom';
import { FaGasPump, FaChartBar, FaGift, FaUser } from 'react-icons/fa';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FaGasPump, label: 'Find Fuel' },
    { path: '/insights', icon: FaChartBar, label: 'Insights' },
    { path: '/rewards', icon: FaGift, label: 'Rewards' },
    { path: '/account', icon: FaUser, label: 'Account' }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          <item.icon className="nav-item-icon" />
          <span className="nav-item-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav; 