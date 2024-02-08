import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Graph from './components/Graph';
import RepoCard from './components/RepoCard';
import EmptyRepoCards from './components/EmptyRepoCards';


function App() {
  const [savedRepos, setSavedRepos] = useState([]);
  const [hoveredRepoId, setHoveredRepoId] = useState(null);

  const colors = [
    'tomato', 'orange', 'gold', 'cyan', 'navy', 'purple', 'pink', 'lime', 'magenta',
    'maroon', 'olive', 'green', 'teal', 'blue', 'gray', 'black', 'red', 'yellow',
    'lightgreen', 'lightblue', 'lightgray', 'darkred', 'darkgreen', 'darkblue',
    'darkorange', 'darkgoldenrod', 'darkgray'
  ];

  const fetchCommitActivity = async (repo, retryCount = 0) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${repo.full_name}/stats/participation`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_GH_TOKEN}`
        }
      });
      if (response.status === 202) {
        if (retryCount < 3) {
          setTimeout(() => fetchCommitActivity(repo, retryCount + 1), 3000); // Wait 3 seconds before retrying
        } else {
          throw new Error('HTTP error! status: 202. Exceeded retry limit.');
        }
      } else if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        const mappedData = data.all.map((total, week) => ({ week, total }));
        const color = colors[savedRepos.length];

        if (savedRepos.some(savedRepo => savedRepo.id === repo.id)) {
          return;
        }
        setSavedRepos(prevSavedRepos => [...prevSavedRepos, {
          id: repo.id,
          full_name: repo.full_name,
          owner: repo.owner.login,
          name: repo.name,
          stargazers_count: repo.stargazers_count,
          html_url: repo.html_url,
          updated_at: repo.updated_at,
          color: color,
          data: mappedData
        }]);


      }
    } catch (error) {
      console.error('Error occurred fetching commit activity:', error);
    }
  };

  function deleteRepo(id) {
    setSavedRepos(savedRepos.filter(repo => repo.id !== id));
  }

  return (
    <div className="App">
      <div className="graph">
        <Graph savedRepos={savedRepos} hoveredRepoId={hoveredRepoId} />
      </div>
      <div className="sidebar">
        <SearchBar fetchCommitActivity={fetchCommitActivity} />
        <div className="repo-list">
          {savedRepos.length > 0 ? (
            savedRepos.map(repo => (
              <RepoCard repo={repo} deleteRepo={deleteRepo} setHoveredRepoId={setHoveredRepoId} />
            ))
          ) : (
            <EmptyRepoCards />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
