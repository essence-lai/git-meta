import React from 'react';
import { Trash2, Star } from 'react-feather';

import '../App.css';


const RepoCard = ({repo, deleteRepo, setHoveredRepoId }) => {

    function calculateTime(updated_at) {
      const updatedDate = new Date(updated_at);
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - updatedDate);
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
      if (diffHours < 24) {
        return `${diffHours} hours ago`;
      } else if (diffDays < 30) {
        return `${diffDays} days ago`;
      } else {
        return `on ${updatedDate.toLocaleDateString()}`;
      }
    }

    return (
        <div className="repo-card-background"  style={{ backgroundColor: repo.color }}  onMouseEnter={() => setHoveredRepoId(repo.id)} onMouseLeave={() => setHoveredRepoId(null)}>
           <div className="repo-card" >
            <div className="repo-info">
              <span className="card-owner">{repo.owner} / </span><span className="card-name">{repo.name}</span>
              <div className="repo-details">
                <p className="card-name"><Star size={12}/> {repo.stargazers_count}</p>
                <p className="card-owner">Updated {calculateTime(repo.updated_at)}</p>
              </div>
            </div>
            <button className="delete-button" onClick={() => deleteRepo(repo.id)}>
                  <Trash2 />
              </button>
          </div>
        </div>
      );
};

export default RepoCard;