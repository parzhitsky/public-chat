# `public-chat`

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Workflow:

The default branch is `develop`; it corresponds to staging (pre-production) environment. Production environment is linked to `main` branch.

1. Create a branch from `develop`;

	```
	git checkout develop
	git checkout -b <new_branch_name>
	git push -u origin <new_branch_name>
	```

1. Make changes to the code, create commits, push them to the new branch;
1. [Create pull request] from the new branch to `develop`;
	- Observe the changes on a temporary environment;
1. Get 2 approvals, and wait for the pull request to be merged;
	- The changes are now at staging environment (but not on prod yet);

Independently, after a while, the code from `develop` will be merged to `main`. This will promote the changes from staging to production environment.

  [Create pull request]: https://github.com/public-chat-team/public-chat/compare

## Scripts:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

<!-- TODO: add tests
### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
-->

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
