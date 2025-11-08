import { Star, Landmark } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90 dark:from-slate-900/70 dark:via-slate-900/70 dark:to-slate-900/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-200 via-fuchsia-200 to-pink-200 dark:from-sky-400/30 dark:via-fuchsia-400/30 dark:to-pink-400/30 text-slate-700 dark:text-slate-100 border border-white/60 dark:border-white/10 shadow">
              <Star className="h-4 w-4" />
              <span className="text-sm">Your trusted hub for Roblox items.</span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              StarTower-Store
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              A pastel-themed marketplace for premium in-game items from your favorite Roblox titles — discover pets, skins, accessories, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#games" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 text-white shadow-md hover:shadow-lg transition-all">
                Browse Games
              </a>
              <a href="#about" className="px-5 py-2.5 rounded-full border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/10 text-slate-800 dark:text-slate-100 hover:shadow-md transition-all">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-gradient-to-br from-sky-200 to-sky-400/60 blur-2xl opacity-70 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-3xl bg-gradient-to-br from-pink-200 to-fuchsia-400/60 blur-2xl opacity-70 pointer-events-none" />
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-sky-300 via-fuchsia-300 to-pink-300 shadow-2xl">
              <div className="rounded-3xl p-8 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-white/60 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-sky-400 to-fuchsia-400 text-white shadow-lg">
                    <Landmark className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white">Secure Trading</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Fast delivery. Verified sellers.</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { label: 'Sky Blue', color: 'bg-sky-400' },
                    { label: 'Lavender', color: 'bg-fuchsia-400' },
                    { label: 'Soft Pink', color: 'bg-pink-400' },
                  ].map((c) => (
                    <div key={c.label} className="rounded-2xl p-4 bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-center shadow">
                      <div className={`h-8 w-8 rounded-full ${c.color} mx-auto mb-2 shadow-inner`} />
                      <p className="text-xs text-slate-600 dark:text-slate-300">{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating pastel particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/4 h-2 w-2 rounded-full bg-sky-300/70 animate-pulse" />
        <div className="absolute top-20 right-1/3 h-2 w-2 rounded-full bg-fuchsia-300/70 animate-pulse" />
        <div className="absolute bottom-16 left-1/3 h-2 w-2 rounded-full bg-pink-300/70 animate-pulse" />
        <div className="absolute bottom-24 right-1/4 h-2 w-2 rounded-full bg-emerald-300/70 animate-pulse" />
      </div>
    </section>
  );
}
