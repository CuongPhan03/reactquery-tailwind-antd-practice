import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <div className="px-28 pt-5">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
