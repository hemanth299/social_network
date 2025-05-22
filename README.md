# Social Network React App

A modern social network web application built with React, Zustand, and Firebase (Authentication, Firestore, and Storage).

## Features

- User registration and login (with avatar upload)
- Real-time chat between users
- User list and chat list
- Block/unblock users
- Toast notifications for feedback
- Responsive and modern UI

## Tech Stack

- [React](https://react.dev/)
- [Firebase](https://firebase.google.com/) (Auth, Firestore, Storage)
- [Zustand](https://zustand-demo.pmnd.rs/) (state management)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (notifications)
- [Vite](https://vitejs.dev/) (build tool)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/social-network.git
cd social-network
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Firebase

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable **Authentication** (Email/Password), **Firestore Database**, and **Storage**.
- Copy your Firebase config and update `src/lib/firebase.js`.
- Add your API key to a `.env` file in the root:

```
VITE_API_KEY="your-firebase-api-key"
```

### 4. (Optional) Set up Firebase Storage CORS

If you plan to upload avatars, configure CORS for Firebase Storage:

```bash
gsutil cors set ./src/cors.json gs://your-bucket-name.appspot.com
```

### 5. Start the development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Folder Structure

```
src/
  components/
    chat/
    detail/
    list/
    login/
    notification/
  lib/
    firebase.js
    upload.js
    userStore.js
    chatStore.js
  App.jsx
  main.jsx
  index.css
```

## License

[ISC](LICENSE)

---

**Note:**

- Make sure to secure your Firebase rules before deploying to production.
- Replace `"your-firebase-api-key"` and `"your-bucket-name"` with your actual values.
