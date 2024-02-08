import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Graph component', () => {
    render(<App />);
    const graphElement = screen.getByTestId('graph');
    expect(graphElement).toBeInTheDocument();
  });

  test('renders SearchBar component', () => {
    render(<App />);
    const searchBarElement = screen.getByTestId('searchbar');
    expect(searchBarElement).toBeInTheDocument();
  });

  test('renders RepoList component', () => {
    render(<App />);
    const repoListElement = screen.getByTestId('repo-list');
    expect(repoListElement).toBeInTheDocument();
  });
});