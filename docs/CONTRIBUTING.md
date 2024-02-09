# Table of Contents
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Branching Strategy](#branching-strategy)

# Getting Started
This project is build and deploy with CircleCi and NetlifyCD

First, run the development server:

```bash
yarn install
yarn start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tests

```bash
yarn test
```

# Branching Strategy

## main workflow
* main workflow is triggered by on main branch
* execute unit tests
* deploy with netlify

## pr workflow 
* pr workflow is triggered on feature/* branches
* execute unit tests