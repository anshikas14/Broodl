# Broodl - Mood Tracking Application

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Core Features](#core-features)
6. [Components](#components)
7. [Authentication](#authentication)
8. [Data Management](#data-management)
9. [UI/UX Design](#uiux-design)
10. [Setup &amp; Installation](#setup--installation)
11. [Development Commands](#development-commands)

## Introduction

Broodl is a web application designed to help users track their daily mood. It provides an intuitive interface for users to record how they feel each day and visualize their mood patterns over time through a calendar view.

## Project Overview

Broodl allows users to:

- Record their daily mood on a scale from "😭" to "😍"
- View their mood history in a calendar format
- Track statistics like average mood and streak days
- Authenticate using email/password or Google authentication

## Technology Stack

- **Frontend Framework**: Next.js 14.2.4
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4.1
- **Authentication & Database**: Firebase 10.12.3
  - Firebase Authentication for user management
  - Firestore for data storage
- **Fonts**: Google Fonts (Fugaz One, Open Sans)

## Project Structure

```
broodl/
├── app/                  # Next.js application pages
│   ├── dashboard/        # Dashboard routes
│   ├── globals.css       # Global styles
│   ├── head.js           # Head component
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/           # React components
│   ├── Button.jsx        # Reusable button component
│   ├── Calendar.jsx      # Calendar visualization
│   ├── CallToAction.jsx  # CTA component
│   ├── Dashboard.jsx     # Main dashboard component
│   ├── Hero.jsx          # Hero section
│   ├── Loading.jsx       # Loading state component
│   ├── Login.jsx         # Authentication component
│   ├── Logout.jsx        # Logout component
│   └── Main.jsx          # Main layout wrapper
├── context/              # React context providers
│   └── AuthContext.js    # Authentication context
├── public/               # Static assets
├── utils/                # Utility functions and constants
│   └── index.js          # Shared utilities
├── firebase.js           # Firebase configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
└── tailwind.config.js    # Tailwind CSS configuration
```

## Core Features

### Mood Tracking

Users can record their daily mood on a five-point scale:

- 😭 (&*@#$) - Rating: 1
- 🥲 (Sad) - Rating: 2
- 😶 (Existing) - Rating: 3
- 😊 (Good) - Rating: 4
- 😍 (Elated) - Rating: 5

### Mood Calendar

The application provides a calendar view that visually represents the user's mood over time using color gradients:

- Each day is colored based on the mood recorded
- Users can navigate through different months and years
- The current day is highlighted

### Statistics

The dashboard displays key statistics:

- Total number of days tracked
- Average mood rating
- Time remaining in the current day

## Components

### Dashboard.jsx

The main dashboard component that allows users to:

- Record their daily mood
- View their mood statistics
- Access the calendar visualization
- Only accessible to authenticated users

### Calendar.jsx

Displays the user's mood history in a calendar format:

- Color-coded days based on recorded mood
- Month/year navigation
- Current day highlighting

### Login.jsx

Handles user authentication:

- Email/password login
- New user registration
- Google authentication via popup

### AuthContext.js

Manages authentication state throughout the application:

- User login/logout functionality
- User data fetching from Firestore
- Authentication state persistence

## Authentication

Broodl uses Firebase Authentication with two methods:

1. **Email/Password Authentication**

   - User registration with email validation
   - Login with existing credentials
   - Password requirements (minimum 6 characters)
2. **Google Authentication**

   - Sign in with Google popup
   - Automatic user creation if first time

## Data Management

### Firebase Firestore Structure

User mood data is stored in Firestore with the following schema:

```
users/
└── {userId}/
    └── {year}/
        └── {month}/
            └── {day}: moodValue
```

- `userId`: Firebase Authentication UID
- `year`: Numeric year (e.g., 2023)
- `month`: Numeric month index (0-11)
- `day`: Day of month (1-31)
- `moodValue`: Numeric mood rating (1-5)

### Data Operations

- **Reading Data**: Data is fetched when a user logs in
- **Writing Data**: Mood is recorded when a user selects a mood option
- **Data Structure**: Nested objects by year, month, and day

## UI/UX Design

### Design Elements

- **Color Scheme**: Predominantly indigo and purple gradient effects
- **Typography**:
  - Fugaz One for headings and accent text
  - Open Sans for body text
- **Visual Effects**:
  - Gradient text via CSS class `.textGradient`
  - Box shadows for buttons via CSS class `.purpleShadow`
  - Hover animations for interactive elements

### Responsive Design

The application is fully responsive with:

- Flexible layouts using Flexbox and Grid
- Responsive text sizing
- Adaptive spacing through Tailwind's responsive modifiers
- Mobile-first approach

## Setup & Installation

1. **Clone the repository**:

   ```
   git clone [repository-url]
   cd broodl
   ```
2. **Install dependencies**:

   ```
   npm install
   ```
3. **Set up Firebase**:

   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Email/Password and Google providers)
   - Set up Firestore database
   - Create a `.env.local` file with the following environment variables:
     ```
     NEXT_PUBLIC_API_KEY=your-api-key
     NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_PROJECT_ID=your-project-id
     NEXT_PUBLIC_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_MESSAGING_SENDER_ID=your-messaging-sender-id
     NEXT_PUBLIC_APP_ID=your-app-id
     NEXT_PUBLIC_MEASUREMENT_ID=your-measurement-id
     ```
4. **Run the development server**:

   ```
   npm run dev
   ```

## Development Commands

- **Development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`
