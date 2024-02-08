import React from 'react';
import '../App.css';
import { Search } from 'react-feather';


const EmptyRepoCards = () => {
  const iconSize = 48;

  return (
    <div className="empty-repo-cards">
      <Search size={iconSize} />
      <h2>Search for a GitHub repository to populate graph</h2>
    </div>
  );
};

export default EmptyRepoCards;