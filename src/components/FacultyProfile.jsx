import React from 'react';

function FacultyProfile({ name, title, email, imageUrl, profileLink }) {
  return (
    <div className="faculty-profile">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={`${name}'s profile`} 
          className="faculty-image" 
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      ) : (
        <div className="faculty-image-placeholder">{name.charAt(0)}</div>
      )}
      <h3>{name}</h3>
      <p>{title}</p>
      <p>Email: {email}</p>
      {profileLink && (
        <a href={profileLink} target="_blank" rel="noopener noreferrer" className="profile-link">
          View Full Profile
        </a>
      )}
    </div>
  );
}

export default FacultyProfile;
