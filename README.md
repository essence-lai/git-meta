<h1 align="center"> MetaLab Github Tool</h1>
<div align="center">
This React project efficiently searches public github repositories and return a graph view of their commits in the past year grouped by weeks. The Graph can be zoomed in and scrolled to see a closer or more broad breakdown of commits count.

<br/>

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/9coiYMfcHu1ERt5ztmp4sB/4x6zVRYEHhPTdAnng8VoAq/tree/main.svg?style=svg&circle-token=329a7f5a4a0fc351c7f3d6211cb4f6091af80d0a)](https://dl.circleci.com/status-badge/redirect/circleci/9coiYMfcHu1ERt5ztmp4sB/4x6zVRYEHhPTdAnng8VoAq/tree/main)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ea497fa-0636-4762-929c-1a6ca56e5583/deploy-status)](https://app.netlify.com/sites/metalab-github-elai/deploys)

Questions? [`@essence-lai`](https://github.com/essence-lai)
<br/>

</div>

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Quick Links](#quick-links)
- [Overview](#overview)
- [Useful Resources](#useful-resources)
- [Future Upgrades](#future-upgrades)

# Quick links
| Resource | Dev-pr | Prod |
| :---: | :---: | :---: |
| Interface | :---:| [MetaLab Github Tool](https://metalab-github-elai.netlify.app/)|
| CircleCi | [All branches](https://app.circleci.com/pipelines/circleci/9coiYMfcHu1ERt5ztmp4sB/4x6zVRYEHhPTdAnng8VoAq)| [Main](https://app.circleci.com/pipelines/circleci/9coiYMfcHu1ERt5ztmp4sB/4x6zVRYEHhPTdAnng8VoAq?branch=main)|
| Netlify | :---:| [Netlify](https://app.netlify.com/sites/metalab-github-elai/overview)|
| Runbook | :---: | [**RUNBOOK**.md](docs/RUNBOOK.md)|
| Contributing | :---: | [**CONTRIBUTING**.md](docs/CONTRIBUTING.md)|


# Overview
    This project provides an interactive platform for users to explore GitHub repositories. Users can search for repositories by name and add them to a dynamic graph. This graph visualizes a year's worth of commit activity, broken down into 52 data points, each representing a week's worth of commits. For enhanced user experience, hovering over the graph highlights the corresponding repository's line, and users have the option to remove any repository from the graph as desired.

# Useful resources
* [FIGMA PROJECT](https://www.figma.com/file/LkoKul35uIyrtwJMZq5Ruj/Dev-Test-design?node-id=0%3A1)
* [Feather Icons](https://feathericons.com/)
* [GITHUB API](https://docs.github.com/en/rest?apiVersion=2022-11-28)
* [Netlify](https://docs.netlify.com/)
* [Circlci](https://circleci.com/docs/getting-started/)

# Future upgrades
* Full Coverage Unit Tests
* Upgrade api call times with a Redis cache to store previous responses
* Add Logging with Splunk and Monitoring with Newrelic