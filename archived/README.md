# Website for Lambda Phi Nu
Lambda Phi Nu is a business leadership fraternity at the University of California, Irvine. Our website is hosted at [lpnuci.com](https://www.lpnuci.com).

This repo consists of a React.js application that contains all the UI components for site. It also makes HTTP requests to our web server in three of those components.

## Getting started
1. Clone the repo
2. Install [Node.js](https://nodejs.org/en) if it isn't installed already. Run `node --version `in a terminal window (either in VSCode's terminal or the Mac terminal app) to ensure it got installed properly.
2. Run `npm install` in the root of the repo.
3. Remember to always run `git pull` before starting a new feature. I would recommend using the [feature-branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), but this may not be necessary since you will be the only one approving Pull Requests.

## Running Locally:
1. Run `npm start` from the root to run the frontend locally. The frontend will spin up at at [localhost:3000](http://localhost:3000).
2. Once you've verified your changes are working locally and are ready to deploy, run `npm run deploy` to deploy the changes to GitHub Pages. 
3. On GitHub.com, navigate to the repo and go to Settings >> Pages and add in our custom domain: "www.lpnuci.com".
4. Wait for the GitHub Pages deployment to complete. You can monitor its status on GitHub.com by going to the Actions tab in the repo.
3. Once changes on the live site are verified, push changes to GitHub via `git push`.

## Testing the Live Server
If you want to test the server hosted on Google Cloud App Engine by sending HTTP requests to it, you will need to manually change the `baseURL`s that HTTP requests are sent to in `CampusInvolvement.js`, `Careers.js`, and `Contact.js.`