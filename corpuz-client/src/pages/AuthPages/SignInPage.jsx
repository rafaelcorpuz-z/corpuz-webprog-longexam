import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const inputClasses =
  'mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-950';
const actionButtonClassName = 'w-full rounded-lg py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-slate-950/95 p-8">
      
      <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        Access your store account to review orders, saved items, and pickup details.
      </p>
      <p className="mt-4 text-sm text-slate-400">
        Need to browse first?{' '}
        <Link to="/" className="font-semibold text-amber-300 transition hover:text-amber-200">
          Go back to homepage
        </Link>
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-slate-100">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-slate-100">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-slate-400">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-700 accent-amber-400" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-amber-300 transition hover:text-amber-200">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 text-sm text-slate-400">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-amber-300 transition hover:text-amber-200">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
