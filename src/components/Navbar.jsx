import { useEffect, useState } from 'react';
import { Star, Gamepad2, Sun, Moon, Home, Info, Phone, Users } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState('system');
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system';
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const apply = (t) => {
      if (t === 'dark') root.classList.add('dark');
      else if (t === 'light') root.classList.remove('dark');
      else {
        // system
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    };
    apply(theme);
    localStorage.setItem('theme', theme);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => theme === 'system' && apply('system');
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    if (theme === 'light') return 'dark';
    if (theme === 'dark') return 'system';
    return 'light';
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-slate-900/40 border-b border-white/30 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-sky-300 via-fuchsia-300 to-pink-300 dark:from-sky-500/60 dark:via-fuchsia-500/60 dark:to-pink-500/60 shadow-md">
              <Star className="h-5 w-5 text-white drop-shadow" />
            </div>
            <span className="font-extrabold tracking-tight text-slate-800 dark:text-white text-lg">
              StarTower-Store
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-600 dark:text-slate-300">
            <a href="#home" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="#games" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Gamepad2 className="h-4 w-4" /> Games
            </a>
            <a href="#about" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Info className="h-4 w-4" /> About
            </a>
            <a href="#contact" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#community" className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-sm hover:shadow transition-all">
              <Users className="h-4 w-4 text-sky-600 dark:text-sky-400" />
              <span className="text-sm text-slate-700 dark:text-slate-200">Roblox Group</span>
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(nextTheme())}
              className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/40 dark:border-white/10 bg-white/70 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:shadow-md transition-all"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="h-4 w-4" />
                  <span className="text-sm hidden sm:inline">Dark</span>
                </>
              ) : theme === 'light' ? (
                <>
                  <Sun className="h-4 w-4" />
                  <span className="text-sm hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4" />
                  <Moon className="h-4 w-4 -ml-1 opacity-60" />
                  <span className="text-sm hidden sm:inline">Auto</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
