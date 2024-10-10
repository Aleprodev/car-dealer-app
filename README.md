# Car dealer app

## Description

This application is a system for filtering vehicles based on their make and model year. It uses Next.js, React, and Redux Toolkit to provide a smooth and efficient user experience.

## Features

- Vehicle make selection.
- Model year selection.
- Navigation to a results page based on the selected make and year.
- Data loading using RTK Query to manage API requests.
- Responsive design implemented using Tailwind CSS.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version >= 14)
- [Yarn](https://yarnpkg.com/) (optional)

## Installation

1. Clone the repository:
   git clone https://github.com/Aleprodev/car-dealer-app.git

2. Go to the directory
   cd car-dealer-app

3. Install the dependencies:
   npm install

   or if you're using yarn:
   yarn install

4. Create a .env.local file and add the following variable
   NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles

5. Initialize the app
   npm run dev

6. Open in your browser
   http://localhost:3000/
