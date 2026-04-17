import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

const inputClasses =
  'mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:bg-slate-950';
const actionButtonClassName = 'w-full rounded-lg py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-slate-950/95 p-8">

      <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        Create a store account for faster checkout, order updates, and pickup details.
      </p>
      <p className="mt-4 text-sm text-slate-400">
        Just browsing?{' '}
        <Link to="/" className="font-semibold text-amber-300 transition hover:text-amber-200">
          Back to homepage
        </Link>
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-slate-100">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-slate-100">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-slate-100">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-slate-100">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 text-sm text-slate-400">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-amber-300 transition hover:text-amber-200">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
