# NoSQL: Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Description
The Social Network API is a project designed to mimic the basic structure of a social network platform at the API level. It provides functionalities for creating, reading, updating, and deleting (CRUD) user profiles, thoughts (similar to posts), and reactions to those thoughts. Users can also add and remove friends from their friend list. The API leverages MongoDB, a popular database for social networks due to its ability to handle large amounts of unstructured data, and Mongoose ODM for easy data modeling. It is built using Node.js and Express.js for efficient routing. 

The User model includes fields for a username and email, and arrays of IDs referencing the user's thoughts and friends. The Thought model includes fields for the thought text, creation date, username, and an array of nested 'Reaction' documents. The project also uses two virtuals, 'friendCount' and 'reactionCount', to provide a dynamic count of a user's friends and a thought's reactions.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Follow these steps to install and run this project:

1. Clone the repository: 
   ```
   git clone https://github.com/rocas3096/NoSql-Social-Network-API.git
   ```
2. Navigate into the project directory:
   ```
   cd NoSql-Social-Network-API
   ```
3. Ensure Node.js is installed on your machine (download from the [official website](https://nodejs.org/en/download/) if not).
4. Ensure MongoDB is installed on your machine (follow the [MongoDB installation guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) if not).
5. Install dependencies using the Node Package Manager (npm):
   ```
   npm install
   ```
6. Start the server:
   ```
   npm start
   ```

You can then use an API testing platform like [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/) to test the API routes.

## Usage
Once the application is installed, follow these steps to use it:

1. Start the server: Run `npm start` in your terminal from the root directory of the project.

2. Test API endpoints: Use an API testing platform like Insomnia Core or Postman to test the endpoints:

   - Get all users: `/api/users`
   - Get a single user: `/api/users/:userId`
   - Post a new user: `/api/users`
   - Update a user: `/api/users/:userId`
   - Delete a user: `/api/users/:userId`

   - Get all thoughts: `/api/thoughts`
   - Get a single thought: `/api/thoughts/:thoughtId`
   - Post a new thought: `/api/thoughts`
   - Update a thought: `/api/thoughts/:thoughtId`
   - Delete a thought: `/api/thoughts/:thoughtId`

   - Post a reaction to a thought: `/api/thoughts/:thoughtId/reactions`
   - Delete a reaction to a thought: `/api/thoughts/:thoughtId/reactions/:reactionId`

   - Post a new friend to a user's friend list: `/api/users/:userId/friends/:friendId`
   - Delete a friend from a user's friend list: `/api/users/:userId/friends/:friendId`

3. Seed the database: If your application comes with a seed file, you can populate your MongoDB database by running `npm run seed`.

4. Be mindful of the data structure for each endpoint. For example, when creating a new user, your request body should look like this:

   ```json
   {
     "username": "lernantino",
     "email": "lernantino@gmail.com"
   }
   ```
   And when creating a new thought:

   ```json
   {
     "thoughtText": "Here's a cool thought...",
     "username": "lernantino",
     "userId": "5edff358a0fcb779aa7b118b"
   }
   ```

5. Update data by making PUT requests to the user or thought endpoints, and delete data by making DELETE requests to the user, thought, friend, or reaction endpoints. 

Always replace placeholder values like `userId`, `thoughtId`, and `friendId` with the actual ID you wish to target.

For a video tutorial on how to use the API, click the image below:

[![Demo of Routes for Social Network API](https://drive.google.com/thumbnail?id=1ZbVTdpx1ouu7f6jvyBpNA5qUpIMg7pdM)](https://drive.google.com/file/d/1ZbVTdpx1ouu7f6jvyBpNA5qUpIMg7pdM/preview)

## License
This project is licensed under the MIT License.

## Contributions
N/A

## Tests
There are currently no tests for this project.

## Questions
For any questions, feel free to reach out:

Github Profile: [Oscar Zavala](https://github.com/rocas3096)

Github username: rocas3096

Email: ozavala3096@gmail.com
