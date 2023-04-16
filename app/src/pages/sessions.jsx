import React from "react";
import { Link } from "react-router-dom";

export const SessionPage = () => {
  const appointments = [
    {
      id: 1,
      coach: {
        name: "John Doe",
        avatar:
          "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg",
        profileUrl: "/profile",
      },
      date: "May 1, 2023 at 10:00 AM",
      status: "Scheduled",
      session: "JavaScript Help",
      contractUrl: "https://www.example.com/contract",
    },
    {
      id: 2,
      coach: {
        name: "Jane Smith",
        avatar:
          "https://avatarfiles.alphacoders.com/283/thumb-283778.jpg",
        profileUrl: "/profile",
      },
      date: "May 5, 2023 at 2:00 PM",
      status: "Completed",
      session: "React Coaching",
      contractUrl: "https://www.example.com/contract",
    },
    
  ];

  return (
    <div className="session-page">
      <div className="header">
        <h1>Your Appointments</h1>
        <div className="back-to-home">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
      <div className="appointments">
        {appointments.map((appointment) => (
          <div className="appointment" key={appointment.id}>
            <div className="coach">
              <Link to={appointment.coach.profileUrl}>
                <img className="avatar" src={appointment.coach.avatar} alt="avatar" />
              </Link>
              <h2>{appointment.coach.name}</h2>
            </div>
            <h3>{appointment.session}</h3>
            <p>{appointment.date}</p>
            
            <p>Status: {appointment.status}</p>
            <div className="buttons">
              <a href={appointment.contractUrl} target="_blank" rel="noopener noreferrer">
                View Contract
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
