import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import apparelImg from '../../assets/img/aparrels.jpg';
import studyImg from '../../assets/img/study essential.jpg';
import essentialsImg from '../../assets/img/dailyessential.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <section className="relative min-h-[24rem] overflow-hidden rounded-xl bg-slate-950 px-4 py-10 sm:px-6 lg:px-10">
        <img
          src={banner}
          alt="Campus storefront banner"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/75 to-slate-900/70" />

        <div className="relative z-10 flex min-h-[20rem] items-center justify-end text-right sm:min-h-[22rem]">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
              Campus Marketplace
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
              Welcome to BulldogEx Shop
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore campus uniforms, student essentials, and school merch in one quick storefront.
            </p>
            <div className="mt-8 flex flex-wrap justify-end gap-3">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Store Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100">Simple stats for easy shopping</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <p className="text-3xl font-bold text-slate-100">08</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Products
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <p className="text-3xl font-bold text-slate-100">06</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Categories
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <p className="text-3xl font-bold text-slate-100">24</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Orders
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <p className="text-3xl font-bold text-slate-100">03</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Shop Sections
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-100">Popular categories</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <img
                src={essentialsImg}
                alt="Daily essentials category"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-100">Daily Essentials</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Bags, tumblers, lanyards, and items used every school day.
            </p>
            <Button to="/products" className="mt-6 w-full" variant="primary">
              View Products
            </Button>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <img
                src={studyImg}
                alt="Study supplies category"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-100">Study Supplies</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Notes, desk tools, and study kits for class and review weeks.
            </p>
            <Button to="/products" className="mt-6 w-full" variant="primary">
              Shop Supplies
            </Button>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900/95 p-6">
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <img
                src={apparelImg}
                alt="Campus apparel category"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-100">Campus Apparel</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Comfortable pieces for class days, commute days, and weekends.
            </p>
            <Button to="/products" className="mt-6 w-full" variant="primary">
              View Apparel
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
