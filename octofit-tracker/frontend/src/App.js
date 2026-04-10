
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container">
            <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#octofitNav" aria-controls="octofitNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="octofitNav">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  {/* <li className="nav-item" style={{ padding: 0 }}>
                    <Link className="nav-link" to="/" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                      <img src={logo} alt="OctoFit Logo" className="octofit-logo" />
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '1px', marginRight: '2rem' }}>OctoFit</span>
                    </Link>
                  </li> */}
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/activities">Attività</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Team</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Utenti</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Allenamenti</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="octofit-home">
              <div className="octofit-hero">
                <h1 className="octofit-title display-3 mb-2">OctoFit Tracker</h1>
                <p className="octofit-subtitle lead mb-4">La tua piattaforma per il fitness, la competizione e il benessere di squadra.</p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                  <Link to="/activities" className="btn btn-success btn-lg">Scopri le Attività</Link>
                  <Link to="/leaderboard" className="btn btn-outline-primary btn-lg">Leaderboard</Link>
                  <Link to="/teams" className="btn btn-outline-secondary btn-lg">Team</Link>
                  <Link to="/workouts" className="btn btn-outline-success btn-lg">Allenamenti</Link>
                </div>
              </div>
              <section className="octofit-info card p-4 mt-4">
                <h2 className="h4 mb-3">Perché OctoFit?</h2>
                <ul className="list-unstyled">
                  <li className="mb-2">✔️ Traccia le tue attività e i tuoi progressi</li>
                  <li className="mb-2">✔️ Crea o unisciti a team per sfide di gruppo</li>
                  <li className="mb-2">✔️ Consulta la classifica e migliora la tua posizione</li>
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
