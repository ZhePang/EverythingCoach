
import { Skills } from "src/components/Skills"
import { Ratings } from "src/components/Ratings"
import { SelfIntroduction } from "src/components/SelfIntroduction"
import styles from 'src/Profile.module.css'
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
    const name = 'John Doe';
    const skills = ['JavaScript', 'React', 'Node.js', 'Express'];
    const rating = 4.5;
    const reviews = 50;
    const intro =
      "Hi, I'm John Doe. I'm a full-stack JavaScript developer with over 5 years of experience. I'm passionate about helping others learn and improve their coding skills, and I believe that anyone can become a great developer with the right guidance and mindset.";
  
    return (
        
      <div className={styles['profile-page']}>
          
        <Link to="/" className="back-to-home">
          Back to Home
        </Link>
        <img
        src="https://avatarfiles.alphacoders.com/283/thumb-283778.jpg" // Use a placeholder or your own image URL
        alt="Profile Avatar"
        className={styles['avatar']}
        />
        <h1 className={styles['profile-name']}>{name}</h1>
        <Link to="/chat">
        <button className={styles['chat-button']}>Chat</button>
        </Link>
        <div className={styles['profile-content']}>
          <Skills skills={skills} />
          <Ratings rating={rating} reviews={reviews} />
          <SelfIntroduction intro={intro} />
        </div>
      </div>
    );
  };