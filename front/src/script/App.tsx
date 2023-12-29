import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};
