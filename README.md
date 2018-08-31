## App for managing a bowling league
This project manages rosters for a fictious bowling league.  Note, it is a work in progress, and I will continue adding to it over time.  The app uses [React](https://reactjs.org/) and [Redux](https://redux.js.org/) on the client side. I will eventually build an API that will be connected to a database for data persistence using Node.js and Express (database to be determined.)

## Getting Started
You will need to have Node.js and NPM installed on your machine.  Installation is out of the scope of this project.  Visit [Node.js](https://nodejs.org/en/) for information on install.

You will also have a basic understanding of how to use the command line.  Here is a good tutorial on how to use the command line by [Treehouse](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line).

To run both client and server side of the app, you will need to start up processes in three different terminal windows.

### 1. Clone or download the repository
Clone or download this repository into the desired location on your machine. CD into the directory of the files.

### 2. Setting up Client / Server sides of app

In separate terminal windows, change into the respective directory you are trying to set up and perform the following:

Run the following code in the file directory to install dependencies:
```
npm install
```
The installation might take several minutes.  If successful, the respective directory will now have a "node_modules" directory with all necessary dependencies installed.

### 3. Running the App

Execute the following to start up the client side app:

<strong>Client Side App</strong>
Run the following code to start up the app:
```
npm start
```
If successful, you should be able to visit "http://localhost:3000/" to see the app.

<strong>Server Side App</strong>
Run the following code to start up the server side of app:

```
node index.js
```
If successful, you should be able to visit "http://localhost:8081/" to see the app.


### 4. Shutting down the App in the terminal
To terminate the client or server app, run the following code:
```
control + c
```
___