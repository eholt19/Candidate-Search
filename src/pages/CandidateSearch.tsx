import { useEffect, useState } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [noMore, setNoMore] = useState(false);

  const getCandidate = async () => {
    setLoading(true);
    try {
      const list = await searchGithub();
      console.log("User list:", list);

      if (!list.length) {
        setNoMore(true);
        return;
      }

      const user = list[0];
      const fullCandidate = await searchGithubUser(user.login);
      console.log("Detailed user:", fullCandidate);

      if (
        fullCandidate &&
        fullCandidate.login &&
        fullCandidate.avatar_url &&
        fullCandidate.html_url
      ) {
        setCandidate(fullCandidate);
      } else {
        console.warn("Invalid user data, trying another...");
        getCandidate();
      }
    } catch (error) {
      console.error("Error fetching candidate:", error);
      setNoMore(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCandidate();
  }, []);

  const saveCandidate = () => {
    if (!candidate) return;
    const existing = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    existing.push(candidate);
    localStorage.setItem("savedCandidates", JSON.stringify(existing));
    getCandidate();
  };

  const skipCandidate = () => {
    getCandidate();
  };

  if (noMore) {
    return <h2>No more candidates available</h2>;
  }

  if (loading || !candidate) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="search-container">
      <h1>Candidate Search</h1>
      <div className="card">
        <img
          src={candidate.avatar_url}
          alt={candidate.name || candidate.login}
          style={{ width: "150px", borderRadius: "8px" }}
        />
        <div className="card-body">
          <h2>
            {candidate.name || "No Name"} <em>({candidate.login})</em>
          </h2>
          <p>Location: {candidate.location || "Unknown"}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${candidate.email || ""}`}>
              {candidate.email || "Not available"}
            </a>
          </p>
          <p>Company: {candidate.company || "Not listed"}</p>
          <p>Bio: {candidate.bio || "No bio provided."}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="reject" onClick={skipCandidate}>
          ➖
        </button>
        <button className="accept" onClick={saveCandidate}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default CandidateSearch;
