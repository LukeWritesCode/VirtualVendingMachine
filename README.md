# VirtualVendingMachine
A virtual vending machine

In order to run this project, you must have npm, node.js, and React downloaded. They can be found here:
1. https://www.npmjs.com
2. https://nodejs.org/en/download/
3. https://reactjs.org

This project can be done using any IDE for node.js, for my implementation I used Visual Studio Code. For the browser, I used Safari, but Google Chrome should work as well. Not all browsers can be used, so try to use either Chrome or Safari:
1. https://code.visualstudio.com/download
2. https://support.apple.com/downloads/safari
3. https://www.google.com/chrome/


The setup of the environment for this project is given below. A link to a more extensive tutorial can be found at the bottom of the page, but most of the steps included are unnecessary becasue of the files I have provided. 


To start this project, first you will need a project folder:


`$mkdir project_name`

`$cd project_name`


Once youre in the project folder, you will create a react app:

`$npx create-react-app client`

`$cd client`

`$npm start`

In your browser, you can navigate to http://localhost:3000/ to view the react app

Now we must create the express app. While in your project folder, type:

`$npx express-generator api`

`$cd api`

`$npm install`

`$npm start`

Once again, you can navigate to http://localhost:3000/ to verify it has worked. 

After following these steps, there will be a number of files under "Client" and under "api". Only four of these files need to be replaced with the ones I provided. The rest can remain unedited.

1) There will be a file named app.js under ~/Client/api/app.js this file should be replaced with the app.js I have provided. (note: app.js and App.js are not the same file)

2) There will be another file folder under ~/Client/api/routes/ the file I have provided for this folder is inventory.js.
   This file needs to be added into the routes folder so that it looks like ~/Client/api/routes/inventory.js

3) There will be a file named App.js under ~/Client/src/App.js this file should be replaced by the App.js file I have proveded. (note: app.js and App.js are not the same file)

4) There will be a file named www under ~/Client/api/bin/www this file should replaced by the www file I have provided.

After completing these steps, the backend and frontend must both be restarted. To start the backend, navigate to the api folder in the terminal and type:

`$npm install`

`$npm start`

To start the frontend, navigate to the client folder in the terminal and type:

`$npm install`

`$npm start`

The backend can be accessed via:  http://localhost:9000/ in a web browser.
The frontend can be accessed via:  http://localhost:3000/ but the frontend should be automatically navigated to after typing the start command

Once it is running, 4 sodas will appear on the screen with their respective description as well as the quantity of remaining sodas. When the button for a soda is clicked, its JSON soda file will download. Once the quantity is 0, the button will disappear and that soda will be unavailable until it is restocked by the vendor (the vendor method for restock can be seen below). Once the vendor restocks, the changes will be reflected on the page. 

There are 3 API routes:
 1. decrementQuantity: This API route will reduce the quantity of each soda so that the amount can be tracked. The frontend will call this every time the button is clicked. Once the quantity reaches 0, the backend will stop decrementing and return 0. If the frontend sees quantity is 0, the button will be removed. 
 2. restock: In order to restock, the backend should be accessed with an http link that reads http://localhost:9000/inventory/restock?id=__&amount=__
The underscores should be replaced with the soda id and amount of soda to restock respectively. The ids for the sodas are 0-3. The restock will add the amount to the current quantity. If the sum of the current amount plus the quantity to be added exceeds the quantity for that soda, then the soda will simply be filled to max quantity. 
3. callAPI: this function will fetch the product inventory from the backend as an array where `products[0]` would contain the first soda. Each soda has 7 attributes: ID, Name, Price, Description, quantity, max_quantity, productImageUrl.


Environment setup tutorial:
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

