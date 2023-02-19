import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage/Dashboard';

const Home = lazy(() => import('./pages/Home').then(module => ({ ...module, default: module.Home })))
const About = lazy(() => import('./pages/About').then(module => ({ ...module, default: module.About })))
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({...module, default: module.NotFound})))


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
