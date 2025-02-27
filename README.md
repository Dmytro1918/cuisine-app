 Recipe Search Application
 Overview

This is a Recipe Search Application built with Next.js and styled using Tailwind CSS. Users can search for recipes based on various criteria such as query, cuisine, and preparation time. The app fetches recipes from the Spoonacular API and displays them with an intuitive UI.

Features

- **Search Page**: Users can enter a recipe query, select a cuisine, and specify preparation time.
- **Recipe Listings**: Displays a list of recipes fetched from the Spoonacular API with images and titles.
- **Recipe Details Page**: Provides detailed information about a selected recipe, including ingredients and preparation time.
- **Responsive Design**: Built with Tailwind CSS to ensure a responsive and visually appealing layout.
- **Server-Side Rendering**: Utilizes Next.js's SSR capabilities to fetch and display data efficiently.
- **Error Handling**: Includes error handling for API requests.

 Architecture

- **Next.js**: Framework for building the application with server-side rendering.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **Spoonacular API**: External API used for fetching recipe data.

 Getting Started

Prerequisites

- Node.js (version 12 or later)
- A Spoonacular API key (sign up for a free account [here](https://spoonacular.com/food-api/docs#Authentication))

### Setup Instructions
Install Dependencies: Once you are in the project directory, run the following command to install the required dependencies:

#npm install
Create Environment Variables: Create a .env.local file in the root of the project and add your Spoonacular API key:

#NEXT_PUBLIC_API_KEY=your_api_key_here
Run the Development Server: Start the development server by executing the following command:

#npm run dev
Open your web browser and navigate to http://localhost:3000 to view the application in action.

Build the Application (optional): If you want to create a production build of the application, run:

#npm run build

After the build process, you can start the production server using:

#npm start
#   c u i s i n e - a p p 
 
 
