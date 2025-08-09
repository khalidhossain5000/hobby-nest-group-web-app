
# 🚀HobbyNest: A Local Hobby Group Organizer

HobbyHub is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions..

##🚀🚀 Project Live Url : https://hobby-nest.netlify.app/ 





# Installation & Setup Guide

### Prerequisites
*(Prerequisites means the things you need to have or prepare before you can run the project)*

- **Node.js** (version 16 or above) — [Download here](https://nodejs.org/)  
- **npm** (comes with Node.js)
- A **Firebase project** with Authentication enabled (Email/Google sign-in)

---
## Steps to Run Locally

### 1. **Download or Clone the Project**

You can either:

- **Download ZIP**
  - Click the green **“Code”** button in the GitHub repository
  - Select **“Download ZIP”**
  - Extract the ZIP file to your desired location

# OR


### 1. **Clone the repository**
```bash
  git clone https://github.com/khalidhossain5000/hobby-nest-group-web-app.git

  cd the-voice-daily-newspaper-web-app

```

### 2.Install dependencies

```bash


  npm install

  cd the-voice-daily-newspaper-web-app

```
### 3.Set up Firebase configuration

- Create a Firebase project in the Firebase Console.
- Enable Authentication methods (Email, Google sign-in).
- Copy your Firebase config object from project settings.
- Create a .env file in the root folder and add:

```bash

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
### Replace the values with your Firebase config.

### 4.Start the development server
```bash

npm run dev

```
###  Open your browser and go to
```bash

http://localhost:3000


```
## Your app should now be running locally!




## Features


- Light/dark mode toggle.
- User AuthenTicatoin with FIreBase.
- User Can Create Their Hobby Group.
- My Group Page shows all group added by the logged in user.
- Private Route to protect important routes.
- Group can be update and also can be deleted.
- Data will be stored in MongoDB.

## Main Technologies Used:
- Frontend: React, Tailwind CSS, Firebase,Firebase Authentications,TanStack Query
- Backend: Node.js, Express.js, MongoDB,Cors
- Deployment: Vercel, Netlify


## Dependencies  :


### FrontEnd : 

- react
- @tailwindcss/vite
- firebase
- lottie-react
- react-awesome-reveal
- react-datepicker
- react-countup
- swiper
- sweetalert2
- react-type-animation
- react-spinners
- react-router
- react-icons
- react-hot-toast


### BackEnd : 

- cors
- dotenv
- express
- firebase-admin
- mongodb
