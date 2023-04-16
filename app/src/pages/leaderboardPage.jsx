import { Leaderboard } from "../components/Leaderboard";
import { Link } from 'react-router-dom';

export const LeaderboardPage = () => {
  return (
    <div className="leaderboard-page">
      <div className="header">
        <h1>Coach Leaderboard</h1>
        <div className="back-to-home">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
      <Leaderboard />
    </div>
  );
};
