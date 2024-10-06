import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { PropertyListings } from './components/PropertyListings';
import { RootErrorBoundary } from './components/RootErrorBoundary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} ErrorBoundary={RootErrorBoundary}>
        <Route index element={<PropertyListings />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}

export default App;
