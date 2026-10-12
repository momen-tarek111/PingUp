<div align="center">

# 🎨 Ping Up — Frontend

**A modern, responsive social media client built with React 19 & Vite**

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[🌐 Live Demo](https://ping-up-omega-five.vercel.app) • [🎬 Watch Video](YOUR_GOOGLE_DRIVE_VIDEO_LINK) • [⚙️ Backend Repo](https://github.com/momen-tarek111/PingUp_Server.git) • [🚀 Live API](https://ping-up-server-one-eta.vercel.app)

</div>

---

## 🎬 Demo Video

[![Watch the demo](https://img.shields.io/badge/▶_Watch_Full_Demo-Google_Drive-red?style=for-the-badge&logo=googledrive&logoColor=white)](YOUR_GOOGLE_DRIVE_VIDEO_LINK)

## 🔗 Live Links

| Service | URL |
|---|---|
| 🌐 Frontend (this repo) | https://ping-up-omega-five.vercel.app |
| 🚀 Backend API | https://ping-up-server-one-eta.vercel.app |

---

## 📖 Overview

**Ping Up** is a full-stack social media platform built with the **MERN stack**.
This repository contains the **frontend**: a fast, responsive, polished UI
where users can post, chat in real time, share stories, and connect with people.

## ✨ Features

- 🔐 **Seamless Auth:** sign-in, sign-up & profile management with Clerk
- 📰 **Feed & Posts:** share text or image-based content
- 📸 **Stories:** upload and view 24-hour stories
- 💬 **Real-time Chat:** instant messaging experience
- 🤝 **Connections:** follow/unfollow and manage friend requests
- 🔎 **Discover:** search and find new users
- 👤 **Profile Management:** edit profile, avatar, cover photo & bio
- 📱 **Fully Responsive:** optimized for mobile, tablet, and desktop
- 🔔 **Toast Notifications:** instant visual feedback
- 🕒 **Relative Timestamps:** friendly "x minutes ago" times with Moment.js

## 🧰 Tech Stack

| Category | Technology | Version |
|---|---|---|
| Framework | React | ^19.2 |
| Build Tool | Vite | ^8.3 |
| Styling | Tailwind CSS (`@tailwindcss/vite`) | ^4.3 |
| State Management | Redux Toolkit + React Redux | ^2.13 / ^9.3 |
| Routing | React Router DOM | ^7.18 |
| Authentication | Clerk (`@clerk/react`) | ^6.16 |
| HTTP Client | Axios | ^1.20 |
| Icons | Lucide React | ^1.46 |
| Notifications | React Hot Toast | ^2.6 |
| Dates | Moment.js | ^2.31 |
| Linting | ESLint | ^10.10 |

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── assets/          # Images & static data
│   ├── components/      # Reusable UI components
│   ├── features/        # Redux slices
│   ├── pages/           # Feed, Messages, ChatBox, Profile, Discover...
│   ├── api/             # Axios instance
│   ├── App.jsx
│   └── main.jsx
├── .env
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js v20.19+ (required by Vite 8)
- The [backend server](YOUR_BACKEND_REPO_LINK) running locally, or use the live API
- A Clerk account

### Installation

```bash
git clone https://github.com/momen-tarek111/PingUp.git
cd client
npm install
```

### Environment Variables

Create a `.env` file:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Local backend:
# VITE_BASEURL=http://localhost:4000
# Production backend:
VITE_BASEURL=https://ping-up-server-one-eta.vercel.app
```

### Scripts

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # run ESLint
```

## 🌐 Deployment (Vercel)

1. Import the repository into **Vercel**
2. Add `VITE_CLERK_PUBLISHABLE_KEY` and `VITE_BASEURL` as environment variables
3. Build command: `npm run build` · Output directory: `dist`
4. In Clerk, add `https://ping-up-omega-five.vercel.app` to your allowed domains/redirect URLs

## 🔮 Future Improvements

- 🔔 Push notifications
- 🌙 Dark mode
- 📞 Voice & video calls
- 💬 Comments & reactions

## 👨‍💻 Author

**Momen Tarek Nagaty**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/momen-tarek-nagaty)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/momen-tarek111)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:momen.tarek.nagaty@gmail.com)

---

<div align="center">⭐ If you like this project, give it a star! ⭐</div>