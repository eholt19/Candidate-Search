# Candidate Search

## Description

Candidate Search is a React + TypeScript application that helps employers search for potential job candidates by pulling public GitHub user data. The app displays candidate information and allows users to accept or reject them. Accepted candidates are stored locally and viewable on a separate page. This project demonstrates API interaction, conditional rendering, state management, and persistent local storage in a front-end web application.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)
- [Deployed Application](#deployed-application)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Candidate-Search.git
   cd Candidate-Search

2. Install dependencies:
    npm install

3. Create a GitHub personal access token and add it to a .env file:
    VITE_GITHUB_TOKEN=your_personal_access_token

4. Start the development server:
    npm run dev

--

# Usage

* When the app loads, a GitHub user is displayed.

* Click the "+" button to save a candidate to your potential list.

* Click the "–" button to skip a candidate.

* Navigate to the Saved Candidates page to view accepted profiles.

* Saved candidates persist using localStorage.

--

# Features

* GitHub API integration with authentication token

* React Router with clean navigation

* State management with hooks

* Responsive layout and dark/light theme support

* Local storage persistence for saved data

* Rejection/acceptance logic to control the candidate flow

* Error handling for no candidates or empty saved lists

--

# Credits

* GitHub REST API Docs

* Render Deployment Guide

* Bootcamp Starter Code & Assignment Instructions

--

# License

This project is licensed under the MIT License

--

# Deployed Application

* [GitHub Repo:](https://github.com/eholt19/Candidate-Search)

* [Deployed Site:](https://candidate-search-56v1.onrender.com)

### ⚠️ Deployment Note

> **Heads up:** Due to intermittent issues with Render's static hosting, you may encounter a `404: Page Not Found` when visiting the deployed site. If that happens, please clone the repo and run the app locally using the instructions below in the [Installation](#installation) section. Thank you for your understanding!

