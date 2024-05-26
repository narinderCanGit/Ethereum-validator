Validator Tracker

Project Objective
The Validator Tracker is a React application designed to take user input for an Ethereum validator ID or public key and return the validator stats and attestations for the provided index. The beaconcha.in API is utilized for fetching validator information.


Features

Navigation Header: Provides easy navigation to different parts of the application.
Sidebar: Contains links to the validator search and the top 10 validators from the leaderboard.
Validator Tracking: Allows users to input a validator ID or public key to fetch and display validator stats and attestations.


Routes

/Welcome: Renders a welcome message and describes the functionality of the application.
/Validator: Renders a description of the expected input (Validator ID or Pubkey) and an input box that takes a validator ID or pubkey. Upon selection and submission, navigates the user to /Validator/{id or pubkey}.
/Validator/{id or pubkey}: Renders validator stats and attestations from the beaconcha.in API for the selected validator.


Components

Navbar
The navbar has two elements:

A navigation link to the welcome view.
A navigation link to the validator search/input form.


Sidebar

The sidebar component:

Contains a link to /Validator.
Displays links for the first 10 validators from the API leaderboard endpoint, linking to /Validator/{id or pubkey}.


Error Handling
Uses error boundaries to handle errors gracefully and provide a fallback UI.


Getting Started

Prerequisites
Node.js and npm installed on your machine.


Installation

Clone the repository:

git clone https://github.com/narinderCanGit/validator-tracker.git
Navigate to the project directory:

cd validator-tracker

Install the dependencies:

npm install

Running the Application
To start the development server, run: npm start

The application will be available at http://localhost:3000.


API Usage
Fetch Validator Suggestions
import { fetchValidatorSuggestions } from '../api/api';
const suggestions = await fetchValidatorSuggestions(userInput);

Fetch Validator Details
import { fetchValidatorDetails } from '../api/api';
const details = await fetchValidatorDetails(validatorId);

Fetch attestations Details
import { fetchAttestationsDetails } from '../api/api';
const details = await fetchAttestationsDetails(validatorId);

Fetch Validator Leaderboard
import { fetchValidatorLeaderboard } from '../api/api';
const leaderboard = await fetchValidatorLeaderboard();


Components Overview

ErrorBoundary
Handles errors in the application and displays a fallback UI with a "Try again" button.

ValidatorSearch
Handles the input for validator ID or public key and fetches suggestions for autocomplete. Navigates to the detailed validator view upon submission.

ValidatorDetails
Displays the stats and attestations for a selected validator.

Sidebar
Displays links to the top 10 validators from the leaderboard.

Navbar
Provides navigation links to the Welcome and Validator Search pages.

Conclusion
This project sets up a React application for tracking Ethereum validators using the beaconcha.in API, featuring robust error handling and a clean, user-friendly interface.