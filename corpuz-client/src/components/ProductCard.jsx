import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <article className="group rounded-xl bg-slate-950/90 p-4 transition hover:bg-slate-900">
      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            {product.title}
          </div>
        )}
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-100">{product.title}</h3>
      <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-400">{product.category}</p>
      <p className="mt-3 text-lg font-bold text-amber-200">{product.price}</p>

      <NavLink
        to={`/products/${product.name}`}
        className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.24em] text-slate-300 transition hover:text-amber-200"
      >
        View product
      </NavLink>
    </article>
  );
};

export default ProductCard;
