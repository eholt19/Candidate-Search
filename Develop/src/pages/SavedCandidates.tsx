import { useEffect, useState } from 'react';
import { GitHubUser } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<GitHubUser[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(saved);
  }, []);

  const handleRemove = (login: string) => {
    const updated = savedCandidates.filter((candidate) => candidate.login !== login);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
    setSavedCandidates(updated);
  };

  if (!savedCandidates.length) {
    return <main><p>No candidates have been accepted.</p></main>;
  }

  return (
    <main>
      <h1>Saved Candidates</h1>
      <div className="table">
        {savedCandidates.map((candidate) => (
          <div
            key={candidate.login}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              borderBottom: '1px solid #666',
            }}
          >
            <img src={candidate.avatar_url} alt={candidate.login} width={80} style={{ borderRadius: '50%' }} />
            <div>
              <h3>{candidate.name}</h3>
              <p><strong>Username:</strong> {candidate.login}</p>
              <p><strong>Location:</strong> {candidate.location}</p>
              <p><strong>Email:</strong> {candidate.email}</p>
              <p><strong>Company:</strong> {candidate.company}</p>
              <p>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </p>
              <button onClick={() => handleRemove(candidate.login)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SavedCandidates;
