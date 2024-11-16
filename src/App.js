import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import FindFuel from './pages/FindFuel';
import FleetInsights from './pages/FleetInsights';
import Rewards from './pages/Rewards';
import Account from './pages/Account';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<FindFuel />} />
            <Route path="/insights" element={<FleetInsights />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
