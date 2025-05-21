import { useState, useEffect } from "react";
import { searchGithub } from "../api/API"; // Ensure this import is correct

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<any>(null); // Updated to 'any' for flexibility
  const [candidatesList, setCandidatesList] = useState<any[]>([]); // Updated to handle multiple candidates

  // Fetch next candidate
  const fetchNextCandidate = async () => {
    const data = await searchGithub();
    if (data.length > 0) {
      setCandidate(data[0]); // Pick the first candidate from the fetched list
    } else {
      setCandidate(null); // No more candidates
    }
  };

  // Save the candidate to localStorage
  const saveCandidate = () => {
    if (candidate) {
      const updatedList = [...candidatesList, candidate];
      setCandidatesList(updatedList);
      localStorage.setItem("savedCandidates", JSON.stringify(updatedList));
      fetchNextCandidate();
    }
  };

  // Reject current candidate and fetch the next one
  const rejectCandidate = () => {
    fetchNextCandidate();
  };

  useEffect(() => {
    fetchNextCandidate();
  }, []);

  return (
    <div>
      {candidate ? (
        <div>
          <h3>{candidate.login}</h3>
          <img src={candidate.avatar_url} alt={candidate.login} width={100} />
          <p>{candidate.location}</p>
          <p>{candidate.company}</p>
          <p>{candidate.email ? candidate.email : "No email available"}</p>
          <button onClick={saveCandidate}>Save</button>
          <button onClick={rejectCandidate}>Reject</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
