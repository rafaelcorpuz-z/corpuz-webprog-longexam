import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'text-sm uppercase tracking-[0.24em] transition',
    isActive
      ? 'text-amber-100 border-b-2 border-amber-400 pb-1'
      : 'text-slate-300 hover:text-slate-100',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-base font-semibold uppercase tracking-[0.24em] text-amber-100">
          BulldogEx
        </NavLink>

        <nav className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center justify-center gap-8">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/auth/signin"
            className="text-sm uppercase tracking-[0.24em] text-slate-300 transition hover:text-slate-100"
            aria-label="Sign in to BulldogEx shop"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/auth/signup"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm uppercase tracking-[0.22em] text-slate-950 transition hover:bg-amber-400"
            aria-label="Create a new BulldogEx account"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
