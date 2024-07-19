# Music Event Management System

## Introduction

This project is a full-stack web application for managing music event artists. The backend is built using Express, MySQL, and Node.js, while the frontend is developed with React. This README provides instructions for setting up and running both the backend and frontend parts of the application.

## Table of Contents

1. [Backend Setup](#backend-setup)
2. [Frontend Setup](#frontend-setup)
3. [Features](#features)
4. [Usage](#usage)

## Backend Setup

The backend is a RESTful API built with Express and MySQL. It handles CRUD operations for artist information.

### Prerequisites

- Node.js
- MySQL
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tishanW98/CRUD-app-with-nodejs-and-mysql.git
   cd CRUD-app-with-nodejs-and-mysql/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `backend` directory and add your database credentials and server port:

   ```plaintext
   DB_HOST=your-database-host
   DB_USER=your-database-user
   DB_PASS=your-database-password
   DB_NAME=your-database-name
   PORT=8000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The backend server should now be running on `http://localhost:8000`.

## Frontend Setup

The frontend is built with React and communicates with the backend API to display and manage artist information.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend application should now be running on `http://localhost:5173`.

## Features

### Backend

- **Get All Artists**: Retrieve a list of all artists.
- **Create Artist**: Add a new artist.
- **View Artist by ID**: Retrieve details of a specific artist.
- **Update Artist**: Modify details of an existing artist.
- **Delete Artist**: Remove an artist from the database.

### Frontend

- **Artist List**: Display a list of all artists.
- **Add Artist**: Form to create a new artist.
- **Edit Artist**: Form to update an existing artist's information.
- **Delete Artist**: Button to remove an artist.

## Usage

1. Ensure both backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:5173` to use the application.
