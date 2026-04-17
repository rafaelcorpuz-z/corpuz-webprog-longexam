import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import banner from '../assets/img/nu_bulldogex_banner.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-slate-800 bg-slate-950 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-slate-800 lg:p-16">
          <div className="relative w-full overflow-hidden rounded-4xl border-2 border-slate-800 bg-slate-900/90">
            <img src={banner} alt="Campus storefront" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative flex h-full items-center justify-center p-10">
              <div className="text-center">
                <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-4xl border border-slate-700 bg-slate-950 p-3">
                  <img src={logo} alt="BulldogEx logo" className="h-full w-full object-contain" />
                </div>
                <p className="text-sm uppercase tracking-[0.28em] text-amber-200/80">
                  Campus Marketplace
                </p>
                <h2 className="mt-4 text-4xl font-bold text-slate-100">
                  Welcome to BulldogEx
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Shop student essentials, merch, and ready-to-pickup orders in one place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <main className="flex items-center bg-slate-950 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
