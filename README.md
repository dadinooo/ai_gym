# AI Gym 🏋️‍♂️🤖

AI Gym is a modern, mobile-first fitness application prototype designed to help users track workouts, analyze progress, and get real-time advice from an AI Spotter. Built with React and Vite, it features a sleek, dark-themed UI with smooth animations.

## ✨ Key Features

- **📱 Mobile-First Design**: Fully responsive layout that simulates a mobile app experience on desktop devices.
- **🤖 AI Spotter**: An integrated chatbot widget to answer fitness questions, check form, and provide exercise recommendations.
- **📊 Interactive Dashboard**: Visualizes your workout streaks, activity, and progress.
- **📝 Workout Logger**: Easy-to-use interface for tracking exercises, sets, and reps.
- **📅 History Tracking**: Review past workouts and monitor your consistency.
- **👤 User Profile**: Manage personal stats and settings.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ai_gym.git
    cd ai_gym
    ```

2.  **Navigate to the app directory:**
    ```bash
    cd gym-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`).

## 📂 Project Structure

```text
ai_gym/
├── gym-app/                # Main application source
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── chat/       # AI Spotter widget
│   │   │   ├── dashboard/  # Home dashboard
│   │   │   ├── layout/     # App shell & navigation
│   │   │   ├── workout/    # Workout logging features
│   │   │   └── ...
│   │   ├── App.jsx         # Main app entry point
│   │   └── main.jsx        # DOM rendering
│   ├── public/             # Static assets
│   └── package.json        # Dependencies & scripts
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
