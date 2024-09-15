# News Website Project

This project is a news website built using React that allows users to view news articles fetched from an external API, filter news by categories, language, country, and search for specific articles. The website includes a responsive design to handle both mobile and desktop layouts.

## Table of Contents
- [Project Setup](#project-setup)
- [Overview](#overview)
- [Challenges and Solutions](#challenges-and-solutions)

---

## Project Setup

### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

### Steps to Set Up the Project Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/chandradiproy/news-website.git
   cd news-website
2. **Install dependencies** In the project directory, run:
    ```bash
    npm install
3. **Set up API Key**

- This project uses the GNews API.
- Sign up at the GNews website and get your API key.
- In the ArticleContext.js file, replace the API_KEY variable with your own API key:
    ```bash
    const API_KEY = "your-api-key-here";
4. **Start the development server**Run the following command:
    ```bash
    npm start

## Overview
### Project Features
-   **Display News Articles:** Fetch and display news articles using the GNews API.
-   **Search Functionality:** Users can search for specific news articles by entering keywords in the search bar.
-   **Filter Options:** Users can filter news by category, language, and country.
-   **Responsive Design:** The website adapts to both desktop and mobile devices.
-   **Pagination:** Navigate between different pages of news results.
-   **Loading State:** Show a loading animation when the data is being fetched.

### Technical Approach
1. **React Framework**
- React was chosen for its modular component-based architecture, which allowed for easy development of reusable components such as ***Card***, ***BigCard***, ***Header***, and ***Footer***.

2. **Context API**
- The ***ArticleContext*** was used to manage the state of the articles, filters, and loading state globally across the application. This avoids prop-drilling and allows for clean separation of logic.

3. **Fetching data from API**
- The ***useEffect*** hook triggers the fetching of articles whenever the user applies a new filter or search term. The fetched data is stored in the global context using ***useState***.

4. **Responsive UI**
- CSS and Tailwind CSS were used to ensure responsiveness. The layout adapts depending on the screen width, showing a collapsible menu and search bar for mobile devices.

## Challanges and Solutions
1. **Issue with Search Functionality**
- **Challenge:** Initially, the search functionality was not working properly. The same set of articles was being displayed regardless of the search term.
- **Solution:** After debugging, it was discovered that the search term was not being correctly passed to the API call. This was fixed by correctly passing the ***searchTerm*** state variable into the fetch URL.

2. **Displaying Loader on Filter Changes**

- **Challenge:** The loader was only visible during the initial page load but not when filters or the search keyword were updated.
- **Solution:** The ***isLoading*** state was manually reset to ***true*** before every API call, and the loader was conditioned to display while the request was being made.

3. **Detecting Clicks Outside the Mobile Menu**

- **Challenge:** Closing the mobile menu and search input when the user clicked outside was tricky.
- **Solution:** This was solved by using the ***useRef*** hook and adding an event listener that detects clicks outside the mobile menu and hides it if necessary.

4. **Responsive Design for Mobile Devices**

- **Challenge:** Adapting the search bar and menu options to smaller screens required careful planning of the layout and handling of mobile-specific events.
- **Solution:** Tailwind CSS's responsive utility classes were leveraged to show and hide elements based on the screen width, ensuring a smooth user experience on both mobile and desktop.

### Website link : https://acnonews.web.app/
