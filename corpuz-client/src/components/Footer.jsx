import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 text-slate-100 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs space-y-3">
          <p className="text-lg font-semibold text-amber-200">BulldogEx Shop</p>
          <p className="text-sm text-slate-400">
            A minimal campus storefront for everyday essentials, study gear, and quick pickup.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Site
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="transition hover:text-amber-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition hover:text-amber-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-amber-200">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Account
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/auth/signin" className="transition hover:text-amber-200">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="transition hover:text-amber-200">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Contact
            </p>
            <p className="text-sm text-slate-300">
              questions@bulldogex.shop
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
