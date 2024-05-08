# To-Do List Application

## Overview

This is a full-stack web application built with Node.js, Express.js, and MongoDB that allows users to manage their tasks and stay organized with customizable to-do lists. The application provides a user-friendly interface for creating, updating, and deleting tasks, as well as organizing them into different lists based on the user's preferences. By using this app, users can increase their productivity, prioritize their tasks, and maintain a clear overview of their to-do lists.

## Features

- **Customizable Lists**: Users can create custom to-do lists with unique names to organize their tasks based on different categories or priorities. Each list can contain multiple tasks that the user can add, update, or delete as needed.

- **Task Management**: Users can add new tasks to their lists, mark tasks as completed, and delete tasks when they're no longer needed. Tasks can be easily edited or updated to reflect changes in priorities or status.

- **Responsive Design**: The application is designed to be responsive and accessible across various devices and screen sizes, allowing users to manage their tasks on the go from their desktop, laptop, or mobile devices.

## Getting Started

To run this application on your local machine, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your system. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

- **MongoDB**: Ensure that MongoDB is installed and configured on your system. You can download and install MongoDB from [mongodb.com](https://www.mongodb.com/).

### Installation

1. Clone this repository to your local machine.


2. Navigate to the project directory.
   ```bash
   cd Todolist_v1-main
   ```

3. Install dependencies using npm.
   ```bash
   npm install
   ```

### Configuration

4. Configure MongoDB:
   - Make sure MongoDB is running on your system. You can start MongoDB by running the `mongod` command in your terminal.
   - Update the MongoDB connection URI in the `app.js` file to point to your MongoDB instance.

### Running the App

5. Start the server using nodemon.
   ```bash
   nodemon app.js
   ```

6. Open your web browser and go to `http://localhost:3000` to access the application.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express.js**: A web application framework for Node.js used to build the server-side logic and API endpoints.
- **MongoDB**: A NoSQL database used for storing the to-do lists and tasks.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB used to interact with the database in Node.js applications.
- **HTML/CSS**: Front-end technologies used for designing the user interface and styling the application.

