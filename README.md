# GBM Coding Challenge by Luis Rodriguez
This project was created as Coding Challenge for the Front-end Developer role at GBM. 

There were to main goals to this proyect. The first goal was to create a website that used utilized an API with 
the day's IPC percent change of its prices, volume. Secondly, 
an authentication was to be added and protect at least one route of the 
proyect. 

Sprint duration: 7 days,

There were two main parts to the project:
1. The Frontend (bootstrapped with create-react-app).
2. The Backend (created with Node.js, Express, MongoDB).

[To view project click here.](Viewhttps://gbmchallengebyiamluisro.netlify.app/)

For testing: 
```
Admin User
email: admin@gbmtest.com
password: root 
````
```
Non-Admin User
email: user@gbmtest.com 
password: secret
```

# 1. Frontend
```
Frontend Struture
.
├── build                   # Compiled files (alternatively `dist`)
├── src                     # Source files (alternatively `lib` or `app`)
| ├── assets                 # Folder holding assets (imgs and styles)
| ├── components             # Folder for components.
| ├── containers             # Folder for containers. 
| ├── routes                 # Routes were added using 'react-router-dom'. App's state is also configured here.
├── index.js                 # Main File.
├── serviceWorker.js         # Not used but created during CRA.
├── setupTest.js             # Established by CRA.
├── .eslintrc                # Used for Cleaning up code.
└── README.md
```

## Data visualization
The [Recharts library](https://github.com/recharts/recharts) was used to use the data from the API. The charts displayed are 3 line graphs with time as its x-axis to which all 3 charts are synced. In other words, if you hover over a particular value in the x-axis, the other 2 charts will display their value at that particular value. 

A slider was implemented to have access to a more detailed view of the graphs. This slider modifies the x-axis, so a user can view the values of a much more specific time period of the day. 

I used the Chrome Extension [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) to allow access to the API since CORS at the server side isn't available. 

## Authentication 
In order to user Authentication, first I created my API to have a DB to store and modify users (see Backend section below). 

I learned how to use the Context API from React and implemented it into the app. After previous experience with Redux, the Context API was more straightforward. I implemented actions and reducers and stated an "initialState" with default values. 

The route "Home" was protected from users being able to access it without having logged in. Once the user had logged in, his/her credentials would be stored in localStorage and the initialState would update retrieving these values. No sensitive information was stored in localStorage for security reasons. 

I also added another route that was protected if the user was not an "Admin" of the app. This route "Admin" holds the user information from the database and simply displays the total number of users who have been registered into the app. The admin can then delete users that need to be deleted. 

A JWT token was used to authenticate into the database, so without a JWT token, no user data would load from the database.

Finally, the user's email is displayed in the top right of the header and is able to close his/her session by hovering over his/her email and clicking on "Cerrar Sesion". 

## Styling 
The styling and layout was designed with a "Desktop-first" approach assuming the user is primarily accessing this information from their laptop or desktop and not through a mobile device. Of course, this assumption requires validation. 

A Layout component was created holding the app's header and footer content, functionalities and styling. 

Each component and container have their own SCSS files and a Variables sheet (vars.scss) was created to re-use common values like the $mainColor or a $h2Color. 

## Deployment 
Frontend deployed through Netlify. 
[![Netlify Status](https://api.netlify.com/api/v1/badges/09c31f29-7ee0-4e62-82ae-7dcec398180d/deploy-status)](https://app.netlify.com/sites/gbmchallengebyiamluisro/deploys)



# 2. Backend
```
Backend Struture
.
├── Backend               # Root dir
| ├── lib                 # Folderfor the MongoDB setup and calling the DB. 
| |   ├── mongo.js                 # File with MongoDB setup. 
| ├── middleware          # Folder for express middlewares, such as a schema validation middleware.
| ├── routes              # Folder for the routes to be called (auth and users endpoints). 
| ├── schemas             # Folder for our schemas developed for the users data object.
| ├── scripts             # Folder for setup scripts to add data to our DB. 
| ├── services            # Folder where our Database services were created. 
| ├── strategies          # Folder for creating our basic and jwt strategies for access the DB. 
| ├── congif.js                # Config file for ENV variables to be used. 
| ├── index.js                 # Main file of the backend service. 

```
## Deployment
API deployed through Heroku.

# Challenges during Sprint
* Learned how to use Context API during sprint, but also led to overlooking other aspects of the project. 
* Attempted to use Server Side Rendering for App, but after taking too long I decided to ommit SSR for this project. However 24-32 hrs were used trying to implement SSR. 
* Using localStorage for keeping user session authenticated was a challenge at first because I needed to find a place to retrieve the items from localStorage and some values were being transformed since retrieving from localStorage creates strings.
* I couldn't find a way to use a "redux-thunk" style functionality within the Context API. I'll keep looking!

# Improvements for Next Sprint 
## Frontend 
* Cleanup CSS for optimal mobile responsiveness. This was overlooked by other aspects like using Context API for state management. 
* Implementing Login with additional Services using oAuth2 (Google, Linkedin).
* Manipulate data in API to transform dates from ISO Date to a simpler format (ie: HH:MM::SS and have the date be displayed at the top of the chart).
* 



