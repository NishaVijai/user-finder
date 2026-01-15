# User Finder

A simple React app to **search, filter, and browse user data** with smooth incremental loading. This project demonstrates fetching JSON data, implementing search and "load more" functionality, skeleton loaders, and smooth scroll effects.

---

## Table of Contents

- [Preview](#preview)  
- [Demo](#demo)  
- [Features](#features)  
- [Technologies](#technologies)  
- [Setup](#setup)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Deployment](#deployment)  
- [License](#license)  

---

## Preview


---

## Demo

![Demo Screenshot](./demo-screenshot.png)  
*(Replace with a screenshot of your app)*

---

## Features

- Search users by first name in real-time  
- Incrementally load users (5 at a time) with smooth transitions  
- Skeleton placeholders for initial fetch  
- Remaining users count & “Load More” button  
- Scroll automatically to newly loaded users  
- Responsive design for desktop, tablet, and mobile  
- Fully hosted-ready (works with Netlify)  

---

## Technologies

- React (with hooks: `useState`, `useEffect`, `useTransition`)  
- JavaScript (ES6+)  
- CSS3 (Flexbox + Grid + Media Queries)  
- Local JSON data for mock users  

---

## Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/user-finder.git
cd user-finder
````

2. **Install dependencies**

```bash
npm install
```

3. **Run the app locally**

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

---

## Usage

1. **Search Users:** Type a first name in the search bar to filter results.
2. **Load More Users:** Click “Load More” to incrementally load the next 5 users.
3. **Smooth Scroll:** Newly loaded users will automatically scroll into view.
4. **Responsive:** Works on desktop, tablet, and mobile devices.

---

## Folder Structure

```
user-finder/
│
├─ public/
│   └─ data/
│       └─ MOCK_DATA.json    # Mock user data
│
├─ src/
│   ├─ assets/
│   │   └─ components/
│   │       ├─ SearchBar.jsx
│   │       ├─ UserList.jsx
│   │       └─ UserCard.jsx
│   │
│   ├─ index.css              # Global styles
│   └─ App.jsx
│
├─ package.json
└─ README.md
```

---

## Deployment

1. Build the app:

```bash
npm run build
```

2. Deploy the `build` folder to **Netlify** or any static hosting service.

> ✅ Make sure your mock JSON data is under `public/data/MOCK_DATA.json` for proper fetching.

---

## License

MIT License © 2026 – NishaVijai

