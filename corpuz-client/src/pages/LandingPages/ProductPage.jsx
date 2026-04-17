import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-4xl">
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-8">
            <h1 className="text-3xl font-bold text-slate-100">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-xl bg-slate-900/95 p-8">
        <div className="mb-4">
          <Button to="/products">Back to Products</Button>
        </div>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          {product.category}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          {product.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="font-bold text-amber-200">{product.price}</span>
          <span>{product.stock}</span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl">
        <div className="mb-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-slate-900 p-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300">
              Product Image
            </div>
          )}
        </div>

        <div className="prose prose-sm max-w-none space-y-4 text-slate-300">
          {product.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-7 text-slate-300 whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary">Add to Cart</Button>
          <Button to="/products">Back to Products</Button>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
