import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Leaderboard = () => {
  const [topCoaches, setTopCoaches] = useState([])

  useEffect(() => {
    // Fetch the top coaches from the server and update the state
    // Example data structure: [{ name: "Coach A", score: 100 }, { name: "Coach B", score: 90 }]
    const fetchedCoaches = [
      { name: "Tiger Woods", score: "-12" },
      { name: "Phil Mickelson", score: "-11" },
      { name: "Rory McIlroy", score: "-10" },
      { name: "Jordan Spieth", score: "-9" },
      { name: "Justin Thomas", score: "-8" },
      { name: "Dustin Johnson", score: "-7" },
      { name: "Bryson DeChambeau", score: "-6" },
      { name: "Jon Rahm", score: "-5" },
      { name: "Collin Morikawa", score: "-4" },
      { name: "Xander Schauffele", score: "-3" },
      { name: "Patrick Reed", score: "-2" },
      { name: "Brooks Koepka", score: "-1" },
      { name: "Hideki Matsuyama", score: "E" },
      { name: "Webb Simpson", score: "+1" },
      { name: "Sergio Garcia", score: "+2" },
      { name: "Jason Day", score: "+3" },
      { name: "Adam Scott", score: "+4" }
    ];
    setTopCoaches(fetchedCoaches)
  }, [])

  return (
    
  
    <div className="leaderboard">
     <Link to="/" className="font-bold text-sm capitalize underlinepink">
          Back to Home
     </Link>
      <h2 className="leaderboard-title">Top Coaches</h2>
      
      <ul className="leaderboard-list">
        {topCoaches.map((coach, index) => (
          <li className="leaderboard-item" key={index}>
            <span className="leaderboard-rank">{index + 1}</span>
            <span className="leaderboard-name">{coach.name}</span>
            <span className="leaderboard-score">{coach.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
