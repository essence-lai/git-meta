import React from 'react';
import '../App.css';
import { Search } from 'react-feather';


const EmptyRepoCards = () => {
  return (
    <div className="empty-repo-cards">
      <Search size={48}/>
      <h2>Search for a GitHub repository to populate graph</h2>
    </div>
  );
};

export default EmptyRepoCards;