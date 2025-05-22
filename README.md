# Broodl

A modern authentication UI built with Next.js, React, and Firebase. Supports email/password and Google authentication.

## Features

- User registration and login with email and password
- Google OAuth login/signup
- Responsive, clean UI with Tailwind CSS
- Context-based authentication state management

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/anshikas14/broodl.git
cd broodl
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable **Email/Password** and **Google** authentication in the Firebase console.
- Create a `.env.local` file in the root directory and add your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.


## Customization

- Update styles in `tailwind.config.js` or component classes.
- Replace the Google logo with your own if desired.
- Extend authentication logic in `AuthContext.js`.


Made with ❤️ by Anshika