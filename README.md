# Blog Post Application

This project is a blog post application that allows users to view posts stored in a MySQL database. Follow the steps below to set up and run the application on your local machine.

# Prerequisites

- **Node.js**: [Download and install](https://nodejs.org/) the latest version.
- **MySQL**: Ensure MySQL is installed and running.
- **Nodemon**: Install globally using `npm install -g nodemon` if not already installed.
- **Live Server**: Use the VS Code Live Server extension or any similar tool to serve the `index.html` file.

## Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/honeypathkar/BlogPost.git
   cd BlogPost

   ```

2. **Install Dependencies**

- Inside the project directory, run the following command:

  ```bash
     npm install
  ```

- Create a database in MySQL. Every Detail about it is on file sql/command.sql. Change the database name and password in app.js to run it correctly.
- Start the server using following command:

  ```bash
  npm run start
  ```

  The server will start at `http://localhost:5000`
  And the data will show at endpoint `/api/posts`

3. **Start The Frontend**

- Open the `index.html` file in your project.
- Use a Live Server extension (e.g., VS Code's Live Server) to serve the file.Visit
  the frontend in your browser.

## Usage

- The application fetches posts from the backend and displays them in the browser
  Click on any post to view its details.
