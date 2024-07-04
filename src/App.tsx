import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import PostsPage from './pages/PostsPage';
import CountPage from './pages/CountPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="count" element={<CountPage />} />
          </Route>

          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
