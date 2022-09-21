# REACT TEMPLATE
[Getting Started with Create React App](src/assets/documents/react-app.md)

#### SETUP:
1. Install ReactJS using the following commands:
```
npx create-react-app . --use-npm
npm start
```

#### PACKAGES:
1. Installed packages using the command `npm install`:
```
react-bootstrap@1.6.3 bootstrap@4.6.0
react-router-dom@5.3.0
-g eslint
```

Documentation:
- [Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) : Styling components.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) : Create routing paths to navigate between components.
- [ESLint](https://eslint.org/) : Check code for formatting & errors.

#### ADDITIONAL PACKAGES:
1. Install packages using the command `npm install`:
```
axios
react-infinite-scroll-component
msw --save-dev
jwt-decode
```

Documentation:
- [Axios](https://www.npmjs.com/package/axios) : to make API requests.
- [Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) : Load additional data when scrolling.
- [MSW](https://mswjs.io/docs/getting-started/install) : Mock Service Worker is used to test functions that make API requests.
- [JWT](https://www.npmjs.com/package/jwt-decode) : JSON Web Token used to convert API data.

#### GITPOD EXTENSIONS:
1. ES7+ React/Redux/React-Native snippet : by dsznajder
2. Prettier - Code formatter : by esbenp
3. ESLint : by dbaeumer
4. Code Spell Checker : by streetsidesoftware

#### CONFIGURE ESLINT:
1. Run the command `eslint --init`.
2. Ok to proceed? : `y`
3. How would you like to use ESLint? : `To check syntax and find problems`.
4. What type of modules does your project use? : `JavaScript modules (import/export)`
5. Which framework does your project use? : `react`
6. Does your project use TypeScript? : `No`
7. Where does your code run? : `browser`
8. What format do you want your config file to be in? : `JSON`
9. Would you like to install them now? : `Yes`
10. Which package manager do you want to use? : `npm`

#### DISABLE ESLINT FOR DEPLOYMENT:
Your deployment will fail if there are ESLint errors that have been left unaddressed. 

Should you wish to proceed with deployment regardless, you will need to follow the next to steps:

1. Add `/* eslint-disable */` to the top of each file that contains unresolved problems.
2. Create a `.eslintignore` file within the root directory, and add the file names of the affected components to this file.

#### CONFIGURE REACT ROUTER:
1. In `index.js`, add the following two imports:
```
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
```
2. Remove existing variable & function, and replace with:
```
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>,
);
```
3. In `App.js`, import React Router:
```
import { Route, Switch } from 'react-router-dom';
```
4. To utilise the links:
```
<Switch>
    <Route exact path="/" render={() => <h1>HELLO WORLD</h1>} />
    <Route render={() => <h3>Page Not Found.</h3>} />
</Switch>
```
- The `<h1></h1>` & `<h3></h3>` will be replaced by components later.
- When creating a navigation link to a component, the link will need to be added like so:
```
<NavLink
  exact
  className={styles.StyleName}
  activeClassName={styles.Active}
  to="/"
>
</NavLink>
```

#### DEPLOY TO HEROKU:
1. In `package.json`, add the following line in the `scripts` section:
```
"heroku-prebuild": "npm install -g serve"
```
2. Create a `Procfile` in the root directory, and add this line to it:
```
web: serve -s build
```
3. `git` `add .`, `commit -m ""` & `push` your changes to Github.
4. Navigate to Heroku, & go to the `Deploy` tab within your project.
5. Connect your GitHub account.
6. Connect your project repository.
7. Click the `Deploy` button.

#### ADDITIONAL:
[Setting up index.html](src/assets/documents/index-setup.md)