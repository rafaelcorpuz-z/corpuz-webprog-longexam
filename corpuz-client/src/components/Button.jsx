import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-slate-800 text-amber-100 hover:bg-slate-700',
  secondary: 'bg-slate-950 text-slate-100 border border-slate-800 hover:border-amber-400 hover:text-amber-100',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  ...props
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
