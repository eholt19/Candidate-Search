import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Correct imports for React Router v6
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul style={{ display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Search</Link> {/* Link to CandidateSearch page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SavedCandidates">Saved Candidates</Link> {/* Link to SavedCandidates page */}
            </li>
          </ul>
        </nav>
        <main style={{ padding: '1rem' }}>
          <Routes> {/* Use 'Routes' to wrap your routes in React Router v6 */}
            <Route path="/" element={<CandidateSearch />} /> {/* Use 'element' prop to render CandidateSearch */}
            <Route path="/SavedCandidates" element={<SavedCandidates />} /> {/* Use 'element' prop for SavedCandidates */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
