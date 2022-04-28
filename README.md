# Website for Lambda Phi Nu
Lambda Phi Nu is a business leadership fraternity at the University of California, Irvine.

### Main packages used:
[React](https://reactjs.org), [Material-UI](https://material-ui.com),
[React Router](https://reacttraining.com/react-router/web/guides/quick-start)

***

### To Get Started
1. clone the GitHub repository
2. run `npm install` in the root
3. Remember to always run `git pull` before starting a new feature

### Running Frontend Locally:
1. run `npm start` in the root of the repo
2. After pushing changes to the remote via Git, push changes to GitHub Pages by running `npm run deploy` in the root
3. On the GitHub repo in GitHub.com, go to Settings >> Pages and add in our custom domain: "www.lpnuci.com"

***

### Note:
If running the server locally too, you must go into any components that make HTTP Requests to the server and change the url from "https://lpn-site-server.herokuapp.com" to "http://localhost:5000". Currently, this is just Careers.js and Contact.js.
