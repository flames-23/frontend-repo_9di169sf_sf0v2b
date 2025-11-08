import { Star, Twitter, MessageCircle, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/50 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl">
      <div className="absolute -top-3 left-10 h-2 w-2 rounded-full bg-sky-300/80 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
      <div className="absolute -top-3 right-16 h-2 w-2 rounded-full bg-fuchsia-300/80 shadow-[0_0_20px_rgba(232,121,249,0.6)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-sky-300 via-fuchsia-300 to-pink-300 shadow-md">
              <Star className="h-5 w-5 text-white drop-shadow" />
            </div>
            <p className="text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} StarTower-Store. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:shadow-md transition">
              <MessageCircle className="h-4 w-4 text-indigo-500" /> Discord
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:shadow-md transition">
              <Twitter className="h-4 w-4 text-sky-500" /> Twitter
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:shadow-md transition">
              <Gamepad2 className="h-4 w-4 text-emerald-500" /> Roblox Group
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
