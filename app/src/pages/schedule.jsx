import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SchedulePage = () => {
    const [availability, setAvailability] = useState([]);
    const [selectedAvailability, setSelectedAvailability] = useState([]);
    const [content, setContent] = useState("");
    const [meetingOption, setMeetingOption] = useState("");
  
    const handleAvailabilityChange = (e) => {
      const value = e.target.value;
      if (selectedAvailability.includes(value)) {
        setSelectedAvailability(selectedAvailability.filter((item) => item !== value));
      } else {
        setSelectedAvailability([...selectedAvailability, value]);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const contract = {
        availability: selectedAvailability,
        content,
        meetingOption,
      };
      console.log(contract);
      // code to create smart contract with coach
    };
  
    const availableTimes = [    "Monday 10:00 AM - 12:00 PM",    "Tuesday 2:00 PM - 4:00 PM",    "Wednesday 1:00 PM - 3:00 PM",    "Thursday 9:00 AM - 11:00 AM",  ];
  
    return (
      <div className="schedule-page">
        <div className="header">
        <h1>Schedule</h1>
        <div className="back-to-home">
          <Link to="/">Back to Home</Link>
        </div>
        </div>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#2196f3" }}>Create a Smart Contract with Your Coach</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <label style={{ marginBottom: "10px" }}>
              Select Your Availability:
              {availableTimes.map((time) => (
                <div key={time} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                  <input type="checkbox" value={time} onChange={handleAvailabilityChange} checked={selectedAvailability.includes(time)} style={{ marginRight: "10px" }} />
                  <span>{time}</span>
                </div>
              ))}
            </label>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <label style={{ marginBottom: "10px" }}>
              Content:
              <textarea value={content} onChange={(e) => setContent(e.target.value)} style={{ width: "100%", height: "150px" }} />
            </label>
            <label style={{ marginBottom: "10px" }}>
              Meeting Options:
              <select value={meetingOption} onChange={(e) => setMeetingOption(e.target.value)} style={{ width: "100%" }}>
                <option value="">Select an Option</option>
                <option value="In Person">In Person</option>
                <option value="Online">Online</option>
                <option value="Phone">Phone</option>
              </select>
            </label>
          </div>
          <button type="submit" style={{ backgroundColor: "#2196f3", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Create Contract</button>
        </form>
      </div>
    );
  };
  