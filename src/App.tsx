// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import CandidateSearch from './pages/CandidateSearch';
// import SavedCandidates from './pages/SavedCandidates';

import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav className="nav">
        <ul style={{ display: 'flex', gap: '1rem', margin: 0, padding: '1rem' }}>
          <li>
            <Link className="nav-link" to="/">Search</Link>
          </li>
          <li>
            <Link className="nav-link" to="/SavedCandidates">Saved Candidates</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;

