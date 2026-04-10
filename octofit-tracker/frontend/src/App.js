
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li style={{ padding: 0 }}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                <img src={logo} alt="OctoFit Logo" className="octofit-logo" />
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px', marginRight: '2rem' }}>OctoFit</span>
              </Link>
            </li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="octofit-home">
              <div className="octofit-hero">
                <h1 className="octofit-title">OctoFit Tracker</h1>
                <p className="octofit-subtitle">La tua piattaforma per il fitness, la competizione e il benessere di squadra.</p>
                <div className="octofit-actions">
                  <Link to="/activities" className="octofit-btn">Scopri le Attività</Link>
                  <Link to="/leaderboard" className="octofit-btn">Leaderboard</Link>
                  <Link to="/teams" className="octofit-btn">Team</Link>
                  <Link to="/workouts" className="octofit-btn">Allenamenti</Link>
                </div>
              </div>
              <section className="octofit-info">
                <h2>Perché OctoFit?</h2>
                <ul>
                  <li>✔️ Traccia le tue attività e i tuoi progressi</li>
                  <li>✔️ Crea o unisciti a team per sfide di gruppo</li>
                  <li>✔️ Consulta la classifica e migliora la tua posizione</li>
                  <li>✔️ Ricevi suggerimenti personalizzati per i tuoi allenamenti</li>
                </ul>
              </section>
            </div>
          } />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
