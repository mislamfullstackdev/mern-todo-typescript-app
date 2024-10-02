### To initial Backend app.

1. create a project folder and create a 'backend' folder for 'backend' API part and go to 'backend' folder
2. type this command
> npm init -y   
> npm add typescript -g   
> npm add express cors mongoose
> npm add -D @types/node @types/express @types/mongoose @types/cors
> npm add -D concurrently nodemon

### create mongodb account and database.

3. To get mongodb connection string, go to mongodb altas website, 
a. create an account
b. create a project, 
c. create a cluster 
d. create a username and password(copy the password and save it)
e. go to connect and it will show some format. select the 'driver method' and below the widows there is a connection string copy and save it in project
4. Install dotenv.
> npm i dotenv
5. create a file named .env. It should be same directory where the package.json file is available
6. add the password in the connection string <password> this place 
7. you are ready to use mongodb. after complete the app.ts file run the server and check the connection
8. To initial typescript config file type following command
> npx tsc --init

> note: 01
** Your 'package.json' should have this code **

```
"scripts": {
    "start": "node dist/app.js",
    "build": "tsc -w",
    "dev": "concurrently \"tsc --watch\" \"nodemon dist/app.js\""
  }
```

** Your 'tsconfig.json' should have this code **

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```


### To initial Frontend app.

Go to client folder(frontend app folder) and type following commands
> npx create-react-app . --template typescript
> npm install axios

