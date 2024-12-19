
![image](https://github.com/user-attachments/assets/81cc1afa-e621-401e-9a66-342b782ca9e0)


# Tech Events Finder

A single-page web app for searching, displaying, and managing local tech events happening in cities in Pakistan. The app allows users to search for tech events based on a city, filter them by event name, and add or edit events. The event data is stored in a local CSV file.

## Features

- **Search by City:** Users can input a city name (from Pakistan) and view all tech events related to that city.
- **Event Name Filtering:** After city-based event results are displayed, users can filter the events by the event name.
- **Add and Edit Events:** Users can add new tech events or edit existing ones.
- **Local Data Storage:** Events data is stored in a local CSV file, which the app reads and updates dynamically.
- **Responsive UI:** The app is styled using **Tailwind CSS** and is responsive for all screen sizes.

## Technology Stack

- **Frontend:**
  - **Next.js:** Framework for building the React-based app with server-side rendering.
  - **Tailwind CSS:** A utility-first CSS framework for building responsive layouts.
  - **Formik:** Form library for managing form state and validation.
  - **Yup:** Schema builder for object validation, used in combination with Formik.
  - **React Hot Toast:** For showing success and error toast notifications.
  - **Axios:** For making HTTP requests (e.g., reading the CSV file).
  - **PapaParse:** To parse CSV files for reading and writing events.
  - **UUID:** To generate unique IDs for new events.
  
- **Backend:**
  - Local CSV file used as a mock database for storing tech event data.

## Setup and Installation

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
Clone the repository to your local machine using Git:

```bash
git clone (https://github.com/yashal-ali/tech-event-finder.git)
cd tech-events-finder
```

### 2. Install Dependencies
Install the required dependencies by running the following command:

```bash
npm install
```

### 3. Run the Development Server
Once the dependencies are installed, run the development server:

```bash
npm run dev
```

This will start the app in development mode. You can view the app by visiting [http://localhost:3000](http://localhost:3000) in your web browser.





```
