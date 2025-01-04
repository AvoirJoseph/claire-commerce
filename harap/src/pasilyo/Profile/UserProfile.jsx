import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userName } = useParams(); 

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
    </div>

    
  );
};

export default UserProfile;
