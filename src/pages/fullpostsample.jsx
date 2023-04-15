export const FullPost1 = () => {
  return (
    <div className="full-page-container" style={{ backgroundColor: "#6c0ab6" }}>
    <div className="full-post-container background-color">
      <div className="post-header">
        
        <h1 className="post-title">Seeking a JavaScript Mentor to Help with Bug Fixing</h1>
        <div className="post-author">
          <img className="avatar" src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="avatar" />
          <p className="author-name">Unknown Author</p>
        </div>
        <p className="post-meta">May 2, 2023</p>
      </div>
      <div className="post-content">
        <p>
          I'm currently working on a JavaScript project and have come across a bug that I can't seem to fix on my own. I'm reaching out to see if anyone would be willing to mentor me through this process and help me find a solution.
          If you have experience with JavaScript and are available to provide some guidance, please let me know. I'm open to any suggestions or tips that could help me resolve this issue.
        </p>
      </div>
      <div className="comments">
        <h2>Comments</h2>
        <div className="comment">
          <div className="comment-header">
            <img className="avatar" src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="avatar" />
            <p className="author-name">John Doe</p>
            <p className="comment-date">May 3, 2023</p>
          </div>
          <div className="comment-content">
            <p>This is a great post, thanks for sharing!</p>
          </div>
        </div>
        <div className="comment">
          <div className="comment-header">
            <img className="avatar" src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="avatar" />
            <p className="author-name">Jane Doe</p>
            <p className="comment-date">May 4, 2023</p>
          </div>
          <div className="comment-content">
            <p>Have you tried using the Chrome Developer Tools to debug the issue?</p>
          </div>
        </div>
        <div className="comment">
          <div className="comment-header">
            <img className="avatar" src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" alt="avatar" />
            <p className="author-name">Bob Smith</p>
            <p className="comment-date">May 5, 2023</p>
          </div>
          <div className="comment-content">
            <p>I'm available to help if you still need assistance. Please let me know.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
