import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { Search } from 'react-feather';

const SearchBar = ({ fetchCommitActivity }) => {
  const [input, setInput] = useState('');
  const [repos, setRepos] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const searchBarRef = useRef(null);

  const handleInput = async (event) => {
    setInput(event.target.value);

    if (event.target.value.length > 2) {
      await search();
    }
  };

  const search = async () => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${input}+is:public`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_GH_TOKEN}`
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRepos(data.items);
      setDropdownVisible(true);
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  return (
    <div className="searchbar" ref={searchBarRef} data-testid="searchbar">
      <input
        type="text"
        value={input}
        onInput={handleInput}
        onChange={e => setInput(e.target.value)}
        placeholder="Search a Github Repository..."
      />
      <button onClick={search}>
        <Search />
      </button>
      {dropdownVisible && (
        <div className="dropdown">
          {repos.map(repo => {
            return (
              <div className="dropdownitem" key={repo.id} onClick={() => fetchCommitActivity(repo)}>
                <span className="owner-login">{repo.owner.login}</span>/<span className="repo-name">{repo.name}</span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;