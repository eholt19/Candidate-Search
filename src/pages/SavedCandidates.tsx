import { useState, useEffect } from "react";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  // Load saved candidates from localStorage
  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(candidates);
  }, []);

  // Reject a saved candidate
  const rejectCandidate = (index: number) => {
    const updatedList = savedCandidates.filter((_, i) => i !== index);
    setSavedCandidates(updatedList);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedList));
  };

  return (
    <div>
      <h3>Saved Candidates</h3>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate: any, index: number) => (
            <li key={index}>
              <img src={candidate.avatar_url} alt={candidate.login} width={50} />
              <p>{candidate.login}</p>
              <p>{candidate.location}</p>
              <p>{candidate.company}</p>
              <button onClick={() => rejectCandidate(index)}>Reject</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;
