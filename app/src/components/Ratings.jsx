import React from 'react'
export const Ratings = ({ rating, reviews }) => (
    <div>
      <h2>Ratings</h2>
      <p>{rating} stars (based on {reviews} reviews)</p>
    </div>
  );