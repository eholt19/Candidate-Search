import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav className="nav">
        <ul style={{ display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li className="nav-item">
            <Link className="nav-link" to="/">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/SavedCandidates">Saved Candidates</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
