# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Tic Tac Toe Design

### Feature spec

The goal of this game is to have a one-player game with computer moves to play with. The user is provided with a 3X3 matrix where the user can either start or ask the computer to start the game. User can choose X or O as the symbol to use for the game.

Once the game starts, user and computer play the game turn by turn till either one of them wins or no one wins the game. Once the game is over, there should be a message saying that the game ended with an overlay. 

As an advanced feature, we can have game history, ability to track down steps in a game till the beginning without an ability to modify the game, user profile to track game history, ability to store the game history in google drive or onedrive, add a timeout for each step to be taken by the user, background music to make the game more fun, background themes to make the game look good, User persona, ability to share the game stats in social media as a gif, etc.

### Component design

App.tsx - The main entry point for the game.

Board.tsx - which carries the 3X3 board for the game.
