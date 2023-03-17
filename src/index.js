import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EventsPage from './pages/EventsPage';
import StandingsPage from './pages/StandingsPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "events",
    element: <EventsPage/>,
  },
  {
    path: "standings",
    element: <StandingsPage/>,
  },
  {
    path: "leaderboards",
    element: <LeaderboardsPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

