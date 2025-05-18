import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { GitHubUser } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<GitHubUser[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [noMore, setNoMore] = useState(false);

  const fetchCandidates = async () => {
    const results = await searchGithub();
    setCandidates(results);
    setCurrentIndex(0);
    setLoading(false);
  };

  const handleAccept = () => {
    const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    saved.push(candidates[currentIndex]);
    localStorage.setItem('savedCandidates', JSON.stringify(saved));
    handleNext();
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= candidates.length) {
      setNoMore(true);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  if (loading) return <main><p>Loading...</p></main>;
  if (noMore) return <main><p>No more candidates available.</p></main>;

  const candidate = candidates[currentIndex];

  return (
    <main>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <img src={candidate.avatar_url} alt={candidate.login} width={120} style={{ borderRadius: '50%' }} />
        <h2>{candidate.name}</h2>
        <p><strong>Username:</strong> {candidate.login}</p>
        <p><strong>Location:</strong> {candidate.location}</p>
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Company:</strong> {candidate.company}</p>
        <p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </p>
        <div>
          <button onClick={handleAccept}>+</button>
          <button onClick={handleNext}>-</button>
        </div>
      </div>
    </main>
  );
};

export default CandidateSearch;
