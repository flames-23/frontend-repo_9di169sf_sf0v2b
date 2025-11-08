import GameCard from './GameCard';

const games = [
  {
    title: 'Grow a Garden',
    cover: 'https://images.unsplash.com/photo-1495231916356-a86217efff12?q=80&w=1200&auto=format&fit=crop',
    description: 'Nurture, trade, and evolve magical plants. Collect rare seeds and cosmetic planters.',
    categories: ['pets', 'skins', 'accessories'],
  },
  {
    title: 'Fish It',
    cover: 'https://images.unsplash.com/photo-1503342452485-86ff0a2b8a9b?q=80&w=1200&auto=format&fit=crop',
    description: 'Cast your line in dreamy waters. Unlock rods, boats, and aquatic companions.',
    categories: ['rods', 'boats', 'pets'],
  },
  {
    title: 'Fisch',
    cover: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop',
    description: 'Explore vibrant oceans and trade rare catches for exclusive gear and styles.',
    categories: ['skins', 'accessories', 'pets'],
  },
  {
    title: 'Crystal Quest',
    cover: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=1200&auto=format&fit=crop',
    description: 'A fantasy expedition. Mine, craft, and trade shimmering relics and armor.',
    categories: ['skins', 'mounts', 'accessories'],
  },
  {
    title: 'Sky Forge',
    cover: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop',
    description: 'Build floating islands and craft sky-tech gadgets. Trade blueprints and gliders.',
    categories: ['blueprints', 'gliders', 'skins'],
  },
  {
    title: 'Neon Speedway',
    cover: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
    description: 'Race through luminous tracks. Unlock cars, trails, and neon wraps.',
    categories: ['vehicles', 'trails', 'wraps'],
  },
];

export default function GamesGrid() {
  return (
    <section id="games" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-100/40 to-transparent dark:via-sky-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">Featured Games</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">Discover popular titles and shop curated item categories.</p>
          </div>
          <a href="#" className="hidden sm:inline-block px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-sm text-slate-700 dark:text-slate-200 hover:shadow-md transition">
            View All
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <GameCard key={g.title} game={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
