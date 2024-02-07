// Routes.js
import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard';
import { Startemy } from '../pages/Projetos/startemy';

export const RouterPages = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/project/startemy" element={<Startemy />} />
    </Routes>
  );
};
