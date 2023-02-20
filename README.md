# strapi-poc
poc for strapi implementation with small react js app

Understanding strapi, uses
Referred to official strapi documentation and starter project

Steps completed: 

1. Installed strapi with quickstart
2. Fixed install errors
3. yarn run develop -> ran and launched dashboard at localhost:1337/admin
4. Created admin account and in strapi dashboard created a collection with 2 text fields- using content type builder
5. Used content manager to create data entries. It be used for all CRUD operations
6. Created test entry, saved and published (saving creates a draft, publish will register to collection)
7. Created API endpoints for collection (In general-->settings), confirmed all permissions given in roles- for our collection (create, read, update)
8. After this, endpoints are generated for get, update etc which we can use on frontend side

For frontend- 
1. Created an app with npm/yarn create-react-app

Created two files at root level for environment variables 
a) .env.development - REACT_APP_BACKEND=http://localhost:1337/
b) .env.production - REACT_APP_BACKEND=/

1. Created for App.js, and a component file and imported it into the App.js and App.css file
2. Added functions to get data from API endpoints, assign to local state, call the component to display 
the data, and pass the values to it
3. Ran build command on react app folder - copied generated build to "public" folder of strapi project folder
4. Checked deployment done and server is running on localhost:1337
5. Ran npm start for frontend react project- checked on localhost:3000- able to fetch data and display
