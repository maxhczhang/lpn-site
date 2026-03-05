# Website for Lambda Phi Nu
Lambda Phi Nu is a business leadership fraternity at the University of California, Irvine. Our website is hosted at [lpnuci.com](https://www.lpnuci.com).

This repo consists of a Next.js application that contains all the UI components for the site. It also makes HTTP requests to our web server in the Contact component.

## Getting Started
1. Clone the repo
2. Install [Node.js](https://nodejs.org/en) if it isn't installed already. Run `node --version` in a terminal window to ensure it got installed properly.
3. Run `npm install` in the root of the repo.
4. Remember to always run `git pull` before starting a new feature.

## Running Locally
1. Run `npm run dev` from the root to run the site locally. It will spin up at [localhost:3000](http://localhost:3000).
2. Once you've verified your changes are working locally and are ready to deploy, push to GitHub and deploy via Vercel.

## Deploying
This site is deployed on [Vercel](https://vercel.com). Connect the repo to a Vercel project and it will automatically deploy on every push to `master`. Set the custom domain to `www.lpnuci.com` in the Vercel project settings.

## Testing the Live Server
The Contact page sends form submissions to a backend hosted on Google Cloud App Engine. To test against it locally, the backend URL is already set in `src/app/contact/page.tsx`. To point to a local backend instead, change the `BACKEND_URL` constant in that file.

## Legacy Code
The original React/CRA site is preserved in the `archived/` folder for reference.
