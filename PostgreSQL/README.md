**Strapi with PostgresSQL-** <br/><br/>

npx create-strapi-app your-project-name 
select quickstart <br/><br/>

Install required dependencies-<br/><br/>

npm install --save @strapi/utils
# OR
yarn add @strapi/utils <br/><br/>

After this, localhost:1337/admin will launch again. 
Strapi contains both a server and a database. The server hosts the APIs, and the database is used to store the application's content.
Strapi uses the Koajs framework for its server. <br/><br/>

To verify this, go to strapi-API/config/ folder.<br/><br/>

1. Download and install the postgresSQL DB for respective OS platform, then run the server. 
2. Note down the username, password and port number selected for the postgres service, as it will be required for configuration.
3. Search for pgAdmin in programs in the pc and open it. Then set an admin password, connect to the running server and create a database, select a name and save it.<br/><br/>

**To configure Strapi to use our PostgreSQL, open project-folder/config/database.js file.**<br/>

Please refer to the postgres section in database.js file for changed values<br/></br/>

**Building collections in strapi- ** <<br/><br/>

Example app- <br/>
A bank admin app that bankers will use to manage accounts in Strapi, and the DB persistence will be PostgreSQL. <br/><br/>

1. New accounts can be created in the app.
2. Transactions can be carried out, i.e., money can be sent from a user to another user.<br/><br/>

We will use 2 models: Account model for the accounts in the bank, and the Transact model for the transactions carried out. <br/><br/>

eg. Account {
      name
      balance
    } <br/>

    Transact {
      sender
      receiver
      amount
    } <br/><br/>

1. Create a new collection using content-type builder in strapi- <br/>
Name of collection: account
fields- 
1. name- long text 
2. balance- Number (float) type <br/>

Then save the collection. <br/><br/>

Name of collection: transact
fields- 
1. sender- long text 
2. receiver- long text
2. amount- Number (float) type <br/>

Then save the collection. <br/><br/>

**Business Logic** 
1. Go to project-folder/api
2. In this folder, verify that there are two folders created for the two collections in strapi- account and transact.

**routes/api-name.js contains the endpoints of the API.
controllers/ folder contains file to customize endpoints.** <br/><br/>

3. Create a folder transaction in the api folder.
4. Then create two folder- routes and controllers inside of this new folder.<br/><br/>

5. **Create a file transaction.js inside the routes folder** - we will configure custom router with a /transaction API endpoint.<br/>
Then, make the handler point to an index function exported from controllers.
6. Now, **create a file transaction.js inside the controllers folder and write required code- using entityServiceAPI object**

**Note:** Transaction API will not be on the admin panel, as it is standalone API, not a collection type.

**For allowing access to all APIs**-<br/><br/>

7. In strapi admin panel, go to settings-> Roles (Users and Permissions Plugin) menu. Then click on Public.
All the APIs with the handlers are here. **Click on the Select all checkbox in each API then Save. ** <br/>

This will allow public access to all the APIs in the Strapi project.<br/></br/>

**Seed Data in the collections-**
1. In content-manager, click on the Account. Click on the + Create new entry button.
2. Add data as required and then save.
3. Then check that data is persisted in pgadmin- run query on table accounts in database bank 
e.g. SELECT * FROM public.accounts
Query should return the entires created in strapi collection
