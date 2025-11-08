import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';

export default function GameCard({ game }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl p-1 bg-gradient-to-br from-sky-300/70 via-fuchsia-300/70 to-pink-300/70 shadow-xl"
    >
      <div className="rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-white/10">
        <div className="relative h-40 w-full">
          <img src={game.cover} alt={game.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-slate-900/60 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 text-white text-xs">
            <Star className="h-3 w-3" /> Featured
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">{game.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{game.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {game.categories.map((c) => (
              <span key={c} className="px-2 py-1 rounded-full text-xs bg-white/80 dark:bg-white/10 border border-white/60 dark:border-white/10 text-slate-700 dark:text-slate-200">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 text-white shadow hover:shadow-md transition-all">
              <ShoppingBag className="h-4 w-4" /> Buy Item
            </button>
            <a href="#" className="text-sky-600 dark:text-sky-400 inline-flex items-center gap-1 text-sm hover:gap-2 transition-all">
              View More <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-sky-300/70 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.45)] transition-all" />
    </motion.div>
  );
}
