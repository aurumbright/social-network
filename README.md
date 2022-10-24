# Social Network API

## Description

This is an API for a social network where users can share their thoughts, react to friends’ thoughts, and create a friend list. This API was built using Express.js, a MongoDB database, and the Mongoose ODM. It also uses Luxon for timestamp formatting. 

## Mock-Up

The walkthrough video shows the GET, POST, PUT, and DELETE routes for Users, Thoughts, Friends, and Reaction. [Click here to view the full video as a webm.](https://drive.google.com/file/d/1QTSsnMTXvjIFKHxhCGqBr45qsNvLak4i/view?usp=sharing) [Click here to view the video as an MP4.](https://drive.google.com/file/d/1C-VuzcTqJfk2YGoRFFpD9-1MbYiua8Ml/view?usp=sharing) The following gif shows how to initialize the API and the first GET route.

![A short gif showing the application being tested in Insomnia.](./Assets/social-network-api.gif)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
