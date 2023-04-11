import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Blog from './component/Blog/Blog';
import JobDetails from './component/JobDetails/JobDetails';
import { Toaster } from 'react-hot-toast'
import ErrorPage from './component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/features.json')
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/features.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader:  () => fetch('/assignmentData.json')
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/features.json')
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
