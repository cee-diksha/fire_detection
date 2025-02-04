import React, { Suspense, lazy } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Loading from './Loading';
import ErrorPage from './pages/ErrorPage';
import './app.css'
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Lazy load components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const Login = lazy(() => import('./pages/Login'));
const SpecificDevice = lazy(() => import('./pages/SpecificDevice'));
const SpecificComp = lazy(() => import('./pages/SpecificComp'));
const SpecificDeck = lazy(() => import('./pages/SpecificDeck'));
const UserManagement = lazy(() => import('./pages/UserMangement'));

// Main layout
const MainLayout = () => {
  return (
    <div className='main-layout'>
        <div className='hm-head'>          
          <div className='hm-head-txt'>
            <img src="/crimson-energy-xs.svg" alt="crimson logo" />
            <div className='hm-logo-txt'>
              <span id='hm-name'>Crimson Energy</span>
            </div>
          </div>

          <div className='hm-logo'>
            <img src="/redraven-xs.svg" alt="redraven logo" />
            <div className='hm-logo-txt'>
              <span id='hm-name'>RedRaven™</span>
              <span id='hm-name-2'>Wireless Detection Systems</span>
            </div>
          </div>
        </div>
      <Outlet />
    </div>
  );
};

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="settings"
          element={
            <Suspense fallback={<Loading />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="info/:id"
          element={
            <Suspense fallback={<Loading />}>
              <SpecificDevice />
            </Suspense>
          }
        />
        <Route
          path="deck/:deck"
          element={
            <Suspense fallback={<Loading />}>
              <SpecificDeck />
            </Suspense>
          }
        />
        <Route
          path="deck/:deck/:comp"
          element={
            <Suspense fallback={<Loading />}>
              <SpecificComp />
            </Suspense>
          }
        />
        <Route
          path="user-management"
          element={
            <Suspense fallback={<Loading />}>
              <UserManagement />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </AnimatePresence>
  );
};

export default Router;
