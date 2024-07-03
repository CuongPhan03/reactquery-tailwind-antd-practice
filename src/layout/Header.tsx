import { NavLink } from 'react-router-dom';

function Header() {
  const routes = [
    { path: '/', title: 'Home' },
    { path: '/posts', title: 'Posts' },
  ];

  return (
    <div className="w-full flex justify-center gap-5 bg-gray-900 py-2">
      {routes.map((route, index) => (
        <NavLink
          to={route.path}
          key={index}
          className={({ isActive }) =>
            'text-xl font-bold text-white px-6 py-2 rounded-xl duration-300 ' +
            (isActive ? 'bg-rose-500' : 'hover:bg-gray-800')
          }
        >
          {route.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Header;
