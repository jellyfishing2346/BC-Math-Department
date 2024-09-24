import React from 'react';

function Card({ title, description, courseNumber, button }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Course Number: {courseNumber}</p>
      <a href={button} target="_blank" rel="noopener noreferrer" className="course-button">
        <button>View Course</button>
      </a>
    </div>
  );
}

export default Card;
