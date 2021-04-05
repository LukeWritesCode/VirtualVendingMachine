# VirtualVendingMachine
A virtual vending machine

In order to run this project, you must have npm, node.js, and React downloaded. They can be found here:
https://www.npmjs.com
https://nodejs.org/en/download/
https://reactjs.org

The setup of the environment for this project is given below. A link to a more extensive tutorial can be found at the bottom of the page, but the steps included are unnecessary becasue of the files I have provided. 


To start this project, first you will need a project folder:
$mkdir project_name
$cd project_name

Once youre in the project folder, you will create a react app:
$npx create-react-app client
$cd client
$npm start

In your browser, you can navigate to http://localhost:3000/ 

Now we must create the express app. While in your project folder, type:
$npx express-generator api
$cd api
$npm install
$npm start

Once again, you can navigate to http://localhost:3000/ to verify it has worked. 

After following these steps, there will be a number of files under "Client" and under "api". Only three of these files need to be replaced with the ones I provided. 

1) There will be a file names app.js under ~/Client/api/app.js this file should be replaced with the app.js I have provided

2) There will be another file folder under ~/Client/api/routes/ the file I have provided for this folder is inventory.js 
   This file needs to be added into the routes folder so that it looks like Client/api/routes/inventory.js

3) Finally, there will be a file named App.js under ~/Client/src/App.js this file should be replaced by the App.js file I have proveded.

After completing these steps, the backend and frontend must both be started. To start the backend, navigate to the api folder in the terminal and type:
$npm install
$npm start

To start the frontend, navigate to the client folder in the terminal and type:
$npm install
$npm start

Once it is running, 4 sodas will appear on the screen with their respective description as well as the quantity of remaining sodas. When the button for a soda is clicked, its JSON soda file will download. Once the quantity is 0, the button will disappear and that soda will be unavailable until it is restocked by the vendor. The vendor should restock (see below). Once the vendors restock, the changes will be reflecked on the page. 

In order to restock, the backend should be accessed with an http link that reads http://localhost:9000/inventory/restock?id=__&amount=__
The underscores should be replaced with the soda id and amount of soda to restock respectively. The ids for the sodas are 0-3.


Environment setup tutorial:
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

