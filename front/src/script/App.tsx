import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
