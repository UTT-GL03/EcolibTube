import { Routes, Route } from 'react-router-dom';

import BuilderView from '@/views/BuilderView';
import TrendingView from '@/views/TrendingView';

function App() {
  return <>
    {/* TODO insert header component */}

    <Routes>
      <Route path="/" element={<BuilderView />} /> {/* route only during dev for testing components, redirect to /trending in prod env */}

      <Route path="/trending" element={<TrendingView />} />

      {/* TODO create custom error page */}
      <Route path="*" element={<h1>404 Error - Page not found</h1>} />
    </Routes>

    {/* TODO insert footer component */}
  </>
}

export default App
