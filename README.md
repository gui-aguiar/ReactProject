# ReactProject

**Author:** Guilherme Aguiar  
**Email:** [ag.guiaguiar@gmail.com](mailto:ag.guiaguiar@gmail.com)

This repository contains a React application built with Vite, configured to run in a Docker container using the Apache web server.

## Technologies Used

- **React**: Library for building user interfaces.
- **Vite**: Fast and modern bundler for frontend development.
- **Apache**: Web server to serve static files in production.
- **Docker**: Containerization tool for easy deployment.

## Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Docker](https://www.docker.com/) (version 20.10 or higher)

## How to Run the Application

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/gui-aguiar/ReactProject.git
cd ReactProject
```

### 2. Build and Run with Docker

#### 2.1. Build the Docker Image

Run the following command to build the Docker image:

```bash
docker build -t react-vite-apache-app .
```

#### 2.2. Run the Container

Start the container by mapping the desired port:

```bash
docker run -p 8080:80 react-vite-apache-app
```

The application will be available at `http://localhost:8080`.

### 3. Environment Variables

You can configure the server port by changing the `PORT` environment variable. To do this, run the container with the following command:

```bash
docker run -p 3000:80 -e PORT=80 react-vite-apache-app
```

## Local Development (Optional)

If you want to run the project locally without Docker, follow these steps:

#### 1. Install Dependencies

Install the project dependencies:

```bash
npm install
```

#### 2. Run the Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite's default port).

## Project Structure

```plaintext
ReactProject/
├── public/            # Static files
├── src/               # Main source code
│   ├── components/    # React components
│   ├── pages/         # Application pages
│   ├── App.jsx        # Root component
│   └── main.jsx       # Entry point
├── .dockerignore      # Files ignored by Docker
├── Dockerfile         # Docker image configuration
├── package.json       # Project dependencies and scripts
├── README.md          # Project documentation
└── vite.config.js     # Vite configuration
```
