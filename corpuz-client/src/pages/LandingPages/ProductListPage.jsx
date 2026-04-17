import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-5xl px-2 py-6 sm:px-4 lg:px-0">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Products
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
          All products
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Browse our full selection of campus essentials, uniforms, and merch. Click a product for details and quick add-to-cart options.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Featured Products
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-100">Product card grid</h2>
          </div>
          <div>
            <Button to="/" className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-100 hover:bg-slate-800">
              Back Home
            </Button>
          </div>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage
