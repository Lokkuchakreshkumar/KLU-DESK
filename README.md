# KLED

KLED is an AI-powered educational helper designed to assist students with their academic questions. It features a React-based frontend and a Node.js backend that leverages the Google Gemini AI for generating answers.

## Features

- **AI-Powered Assistance**: Get help with your academic questions from an advanced AI.
- **Subject-Specific Context**: The AI can provide answers based on the subject, title, academic year, and semester.
- **Interactive Chat**: Engage in a conversation with the AI to clarify your doubts.
- **User-Friendly Interface**: A clean and intuitive interface for a seamless user experience.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **AI**: Google Gemini

## Project Structure

The project is organized into two main directories:

- `frontend/`: Contains the React application.
- `backend/`: Contains the Node.js server.

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB
- A Google Gemini API Key

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the `backend` directory and add the following environment variables:
    ```
    MONGO_URI=<Your_MongoDB_Connection_String>
    GEMINI_API_KEY=<Your_Google_Gemini_API_Key>
    SAFEROUTE=<Your_Secret_Route>
    password=<Your_Password_for_the_Safe_Route>
    ```

4.  **Start the backend server:**
    - For production:
      ```bash
      npm start
      ```
    - For development (with auto-reloading):
      ```bash
      npm run dev
      ```
    The server will be running on `http://localhost:8080`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## How to Run Both Frontend and Backend Concurrently

1.  Open two terminal windows.
2.  In the first terminal, start the backend server as described in the "Backend Setup" section.
3.  In the second terminal, start the frontend development server as described in the "Frontend Setup" section.
4.  Open your browser and navigate to the frontend URL provided in the terminal. The frontend will connect to the backend server running on `localhost:8080`.