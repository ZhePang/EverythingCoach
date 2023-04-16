import { Link } from 'react-router-dom';
export const FullPost1 = () => {
  return (
    <body class="post-page">
    <div className="full-page-container" style={{ backgroundColor: "#6c0ab6" }}>
      <div className="header">
        <h1>Post for Help</h1>
        <div className="back-to-home">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    <div className="full-post-container background-color">
      <div className="post-header">
        
        <h1 className="post-title">Help: Seeking a JavaScript Mentor to Help with Bug Fixing</h1>
        <div className="post-author">
          <img className="avatar" src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="avatar" />
          <p className="author-name">Unknown Author</p>
        </div>
        
      </div>
      <div className="post-content">
        <p>
          I'm currently working on a JavaScript project and have come across a bug that I can't seem to fix on my own. I'm reaching out to see if anyone would be willing to mentor me through this process and help me find a solution.
          If you have experience with JavaScript and are available to provide some guidance, please let me know. I'm open to any suggestions or tips that could help me resolve this issue.
        </p>
      </div>
      <div className="comments">
        
        <h2 style={{ fontSize: "24px", color: "white", marginBottom: "20px" }}>Coach Offerings</h2>
        <h3 style={{ fontSize: "18px", color: "lightgray", marginBottom: "3px" }}>Click on Coach to View Profile</h3>

      

        <div className="comment">
        <div className="comment-header">
          <Link to="/profile">
            <img className="avatar" src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="avatar" />
            <span className="tooltip">Click to view profile</span>
          </Link>
          <p className="author-name-comment">John Doe</p>
        </div>
          <div className="comment-content">
            <p>I'm available for the <strong>Javascript Help</strong> session on May 1, 2023. Let me know if you're interested!</p>
            <div className="availability-slots">
              <div className="availability-slot">
                <p>Slot 1: May 1, 2023 at 10:00 AM</p>
                <Link to="/schedule">
                  <button className="schedule-button">Schedule</button>
                </Link>
              </div>
              <div className="availability-slot">
                <p>Slot 2: May 1, 2023 at 2:00 PM</p>
                <Link to="/schedule">
                  <button className="schedule-button">Schedule</button>
                </Link>              </div>
              <div className="availability-slot">
                <p>Slot 3: May 1, 2023 at 6:00 PM</p>
                <Link to="/schedule">
                  <button className="schedule-button">Schedule</button>
                </Link>              
                </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    </div>
    </body>
  );
};
