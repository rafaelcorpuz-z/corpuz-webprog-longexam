import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import essentialsImg from '../../assets/img/dailyessential.jpg';
import studyImg from '../../assets/img/study essential.jpg';
import apparelImg from '../../assets/img/aparrels.jpg';
import toteImg from '../../assets/img/campus-tote-bag.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-xl bg-slate-900 p-6">
            <div className="flex min-h-[18rem] items-center justify-center rounded-xl bg-slate-950/5">
              <img src={logo} alt="BulldogEx" className="h-32 w-32 rounded-full border border-slate-700 bg-slate-950 object-contain" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              About Store
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
              A campus shop focused on useful products and simple ordering.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              BulldogEx Shop keeps the low-fidelity layout system while presenting clear product categories, quick actions, and straightforward store information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-100">Quick store blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
            <p className="text-2xl font-bold text-slate-100">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Items
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
            <p className="text-2xl font-bold text-slate-100">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Categories
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
            <p className="text-2xl font-bold text-slate-100">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
            <p className="text-2xl font-bold text-slate-100">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-100">Stacked shopping wireframe</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
                <h3 className="text-lg font-semibold text-slate-100">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Products are grouped by daily need so shoppers can scan faster.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
                <h3 className="text-lg font-semibold text-slate-100">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Product pages keep price, stock, and action buttons easy to find.
                </p>
              </article>

              <article className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
                <h3 className="text-lg font-semibold text-slate-100">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Store information stays direct for students who need quick order updates.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Category Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <img
                  src={essentialsImg}
                  alt="Daily essentials category"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <img
                  src={studyImg}
                  alt="Study supplies category"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <img
                  src={apparelImg}
                  alt="Campus apparel category"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                <img
                  src={toteImg}
                  alt="Another category"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
