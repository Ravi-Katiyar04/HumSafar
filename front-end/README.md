# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


```
train-booking-app/
├── backend/
│   ├── config/
│   │   └── db.js                 // MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   └── trainController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Train.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── trainRoutes.js
│   ├── utils/
│   │   └── liveTrainAPI.js       // For fetching real-time train status
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── TrainList.js
│   │   │   ├── BookingForm.js
│   │   │   └── LiveStatus.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── BookTicket.js
│   │   │   └── CheckStatus.js
│   │   ├── App.js
│   │   ├── api.js                // Axios instance
│   │   └── index.js
│   ├── .env
│   └── package.json
│
└── README.md

```
