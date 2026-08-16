# Personal Project Showcase App

A responsive Single Page Application (SPA) built with React that allows users to showcase, add, and search through personal projects.

## Project Overview

The Personal Project Showcase App was developed as part of a React summative lab. The application is based on the provided project showcase mock-up and demonstrates React component development, state management, user interactions, responsive styling, and unit testing.

The application allows users to:

View a collection of projects.
Add new projects dynamically.
Search for projects by title or description.
Receive feedback when no projects match a search.
Use the application on desktop, tablet, and mobile devices.

## Features

### Project Display

The application displays projects dynamically using reusable React components.

Each project contains:

Project title
Project description
Project image/placeholder

### Add Project

Users can add a new project through the **Add Project** form.

The form includes:

Title input
Description textarea
Add Project button

The form validates that both the title and description contain information before adding the project.

### Search

The search feature allows users to filter projects dynamically.

Users can search using:

Project title
Project description

The displayed project list updates as the user types.

### Responsive Design

The application is designed to work across different screen sizes.

Responsive styling is provided for:

Mobile devices
Tablets
Desktop computers

### Testing

The application includes unit and interaction tests using:

Jest
React Testing Library
`@testing-library/user-event`

Tests cover important functionality including:

Project card rendering
Form rendering
Form submission
Empty form validation
Form reset
Project searching
Empty search results
Adding projects through the complete application

## Technologies Used

React
JavaScript
Vite
CSS
Jest
React Testing Library
Git
GitHub

## Getting Started

### Prerequisites

Make sure you have the following installed:

Node.js
npm
Git

You can verify the installations with:

```bash
node --version
npm --version
git --version
```

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd personal-project-showcase
```

Install the project dependencies:

```bash
npm install
```

### Start the Development Server

Run:

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

Open the URL in your browser.

## Running Tests

Run the Jest test suite with:

```bash
npm test
```

To run Jest in watch mode:

```bash
npm run test:watch
```

## Usage

### Adding a Project

1. Enter a project title.
2. Enter a project description.
3. Click **Add Project**.
4. The new project will appear in the project list.

### Searching Projects

1. Click the **Search Projects** field.
2. Enter a project title or description.
3. The project list will automatically update to show matching projects.

If no projects match the search, the application displays a message informing the user that no projects were found.

## State Management

The application uses React's `useState` hook.

The main `App` component manages:

The collection of projects.
The current search term.

The `ProjectForm` manages its own temporary form input state.

This structure keeps shared state in the nearest common parent while allowing components to remain reusable.

## Known Limitations

Projects are currently stored in React state and are not connected to a backend database.
Refreshing the browser will reset projects to the initial project list unless persistent storage is implemented.
Project images currently use placeholders rather than an image upload system.
There is no user authentication.
Projects cannot currently be edited or deleted.
The application does not yet have a backend API.

These limitations can be addressed in future versions by adding a backend, database, authentication, persistent storage, project editing, and project deletion.

## Future Improvements

Possible future improvements include:

Add `localStorage` persistence.
Add edit and delete functionality.
Add project image uploads.
Add project categories and technology tags.
Add project detail pages.
Add a backend API.
Add database storage.
Add user authentication.
Deploy the application online.

## Responsive Design

The interface uses CSS media queries to adapt the layout for different screen sizes.

The design was inspired by the provided mock-up while adding additional styling improvements such as:

Rounded cards
Consistent spacing
Responsive form controls
Hover effects
Empty search states
Mobile-friendly layouts

## License

This project was created for educational purposes as part of a React development course.
