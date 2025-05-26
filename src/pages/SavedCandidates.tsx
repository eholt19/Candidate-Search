import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("savedCandidates");
    if (stored) {
      setSavedCandidates(JSON.parse(stored));
    }
  }, []);

  const handleReject = (index: number) => {
    const updated = [...savedCandidates];
    updated.splice(index, 1);
    setSavedCandidates(updated);
    localStorage.setItem("savedCandidates", JSON.stringify(updated));
  };

  if (savedCandidates.length === 0) {
    return <h2>No potential candidates have been accepted yet.</h2>;
  }

  return (
    <div className="saved-container">
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate, index) => (
            <tr key={index}>
              <td>
                <img
                  src={candidate.avatar_url}
                  alt={candidate.name || candidate.login}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>
                {candidate.name} <em>({candidate.login})</em>
              </td>
              <td>{candidate.location || "Unknown"}</td>
              <td>
                <a href={`mailto:${candidate.email}`}>{candidate.email || "N/A"}</a>
              </td>
              <td>{candidate.company || "N/A"}</td>
              <td>{candidate.bio || "N/A"}</td>
              <td>
                <button className="reject" onClick={() => handleReject(index)}>
                  ➖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
