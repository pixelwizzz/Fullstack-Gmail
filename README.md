# My First Full-Stack Project: A Gmail Clone! 📧✨

Hey there! 👋 Welcome to my very first full-stack web development project. I wanted to challenge myself to build something complex, interactive, and beautiful, so I decided to build a **Gmail Clone** from scratch! 

As my first big project, this was an amazing learning experience. It helped me understand how to structure a full-stack codebase, manage global state, style a modern user interface, and connect a frontend to a Node/Express backend. I tried to make it look and feel as close to the real Gmail as possible, while adding some slick modern touches.

---

## 🚀 Key Features

*   📂 **Active Sidebar Navigation:** Fully functional routes for **Inbox, Starred, Snoozed, Sent, and Drafts**.
*   📩 **Categorized Inbox Tabs:** Just like real Gmail, emails are divided into **Primary, Social, Promotions, and Updates** tabs.
*   📝 **Compose Mail Modal:** A clean, animated compose dialog with micro-animations for composing new messages.
*   🌟 **Starring & Interaction:** Easy interaction to toggle starred emails and explore different views.
*   🔍 **Smart Search Bar:** Quick filter matching to search through subject lines and sender names.
*   ⚡ **Instant Play (Direct Dashboard Access):** To make local testing and review as fast and friction-free as possible, I removed forced login/signup walls. The app takes you directly into the inbox experience immediately upon launch!

---

## 🛠️ The Tech Stack

I chose a modern JavaScript stack to build this:

### Frontend:
*   **React (Vite):** For building a fast, component-driven UI.
*   **Redux Toolkit:** For robust, centralized state management across the inbox, navigation tabs, and email statuses.
*   **Tailwind CSS:** To design a clean, responsive layout that matches Gmail's sleek Material Design with subtle hover states and custom scrollbars.
*   **React Router:** For seamless client-side page routing.
*   **React Icons:** For crisp, modern iconography.

### Backend:
*   **Node.js & Express.js:** To set up an API server that handles mail routing, user database structures, and mail queries.
*   **MongoDB (Mongoose):** For database storage of emails and mock data (configured in the backend env settings).

---

## 💻 Getting Started / How to Run Locally

If you want to play around with this project locally, here is how you can set it up in just a few steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 1. Clone the repository
```bash
git clone https://github.com/pixelwizzz/Fullstack-Gmail.git
cd Fullstack-Gmail
```

### 2. Set up the Backend
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Run the backend server (starts on port 8080 by default)
npm run dev
```
*(Note: If you are setting up MongoDB, make sure to add your MongoDB URI into a `.env` file in the backend folder: `MONGO_URI=your_uri_here`)*

### 3. Set up the Frontend
Open a new terminal window at the root of the project:
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the Vite development server (starts on http://localhost:5173/)
npm run dev
```

Now, open your browser and navigate to `http://localhost:5173/` to explore the clone!

---

## 🧠 What I Learned Doing This

Building this project taught me so much more than just writing code:
1.  **State Management is Key:** Coordinating the selected category tabs, sidebar states, active search filters, and the compose dialog taught me how powerful Redux Toolkit is when managing global React state.
2.  **Connecting Front to Back:** Writing actual Express API endpoints and calling them from React helped demystify how the web works under the hood.
3.  **UI/UX Details Matter:** Aligning icons, styling active vs inactive tabs, creating smooth hover overlays, and building responsive grids made me appreciate how much work goes into making an application look truly premium.

---

## 🤝 Feedback & Contributions

Since this is my very first project, I'd love to hear your thoughts, suggestions, or feedback! Feel free to open an issue, suggest a styling tweak, or just reach out! 

If you like what you see, give it a star! ⭐ Thanks for checking out my work!
