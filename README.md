# VirtualVendingMachine
A virtual vending machine

In order to run this project, you must have npm, node.js, and React downloaded. They can be found here:
https://www.npmjs.com
https://nodejs.org/en/download/
https://reactjs.org

The setup of the environment for this project is found here:
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
IMPORTANT NOTE: it is unnecessary to complete the "Connecting the React Client to the Express API" steps. This will be done by the files I have provided.


After following these steps, there will be a number of files under "Client" and under "api". Only three of these files need to be replaced with the ones I provided. 

There will be a file names app.js under Client/api/app.js this file should be replaced with the app.js I have provided

There will be another file folder under Client/api/routes/ the file I have provided for this folder is inventory.js 
This file needs to be added into the routes folder so that it looks like Client/api/routes/inventory.js

Finally, there will be a file named App.js under Client/src/App.js this file should be replaced by the App.js file I have proveded.

After completing these steps, the backend and frontend must both be started. To start the backend, navigate to the api folder in the terminal and type:
$npm install
$npm start

To start the frontend, navigate to the client folder in the terminal and type:
$npm install
$npm start

In order to restock, the backend should be accessed with an http link that reads http://localhost:9000/inventory/restock?id=__&amount=__
The underscores should be replaced with id and amount of soda to restock respectively. The ids for the sodas are 0-3.
