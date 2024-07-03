import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div>
      <Header />
      <div className="px-28 pt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
