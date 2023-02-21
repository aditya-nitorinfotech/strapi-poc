# strapi-poc
**POC for strapi implementation with small react js app**

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
i) .env.development - REACT_APP_BACKEND=http://localhost:1337/  
ii) .env.production - REACT_APP_BACKEND=/
 

1. Created for App.js, and a component file and imported it into the App.js and App.css file
7. Added functions to get data from API endpoints, assign to local state, call the component to display 
the data, and pass the values to it
3. Ran build command on react app folder - copied generated build to "public" folder of strapi project folder
4. Checked deployment done and server is running on localhost:1337
5. Ran npm start for frontend react project- checked on localhost:3000- able to fetch data and display



**POC for custom API endpoints using strapi-**<br/>
**Main files for reference: In strapi-poc/custom-API-Service - src/api/posts-report/**

**For this implementation strapi's Entity service API is used** and MVC architecture used for strapi with controller and services

Steps completed:
1. npx create-strapi-app proj_name --template blog
2. After project is created and localhost:1337/admin is launched, create an account using exisiting or new 
credentials 

Note: as we have used blog template- in the dashboard in content manager, already some collections and 
test data entries will be created, or we can create more or new entries, and manage them

3. After that navigate to folder created in cmd and execute-
npm/yarn strapi generate
4. Select the option: api- generate a basic API 
and enter any name for the api 
Other options will be shown to generate controller, middleware, service etc.

5. 3 files will be generated after execution of command- present in root folder-- src/api/api_name/controllers,
src/api/routes, src/api/services

Working: Requests sent to Strapi on any URL are handled by routes. By default, Strapi generates routes for all the 
content-types. Routes can be added and configured. Once a route exists, reaching it executes some code handled 
by a controller.

6. Change the routes and services files with required code- for services to fetch all pages and push into an array
Once service is created- access it by a controller-    

strapi.service('api::yourAPIName.yourServiceName');

To get list of services- 

console.log('strapi.services ', strapi.services);

Note: Here, controller function is responsible for invoking the service on request and returning results from the route to response
They have access to request response object, service functions should not access directly

7. Change the controller file with required code- and **restart the server as it can cause error** 
8. After that authentication is required to access API endpoint 
 For this in admin dashboard, go to Settings->Roles (Users and Permissions Plugin)->Public
 In this click on the created route name name dropdown and select the checkbox and save it

8. Now check the endpoint on localhost:1337/api-endpoint and you will see the fetched test data. This is working on collections data 
and not single data
9. For UI side, parse the data and display whatever is required 

10. To check on postman/thunder client- 
hit GET endpoint localhost:1337/api/your-endpoint-name and can verify that can get data
