import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesGrid from './components/GamesGrid';
import Footer from './components/Footer';

function BackgroundGradients() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200 via-fuchsia-200 to-pink-200 blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-pink-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-70" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <BackgroundGradients />
      <Navbar />
      <main>
        <Hero />
        <GamesGrid />

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-3xl p-1 bg-gradient-to-br from-sky-300/70 via-fuchsia-300/70 to-pink-300/70 shadow-xl">
            <div className="rounded-3xl p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-white/10">
              <h3 className="text-2xl font-bold">Why StarTower-Store?</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
                We combine modern design with secure, community-first trading. Enjoy fast delivery, verified listings, and a dreamy pastel interface that makes shopping for in-game items a delight.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Secure', desc: 'Protected transactions and trusted sellers.' },
                  { title: 'Fast', desc: 'Instant confirmations and quick delivery.' },
                  { title: 'Curated', desc: 'Hand-picked items for popular Roblox games.' },
                ].map((f) => (
                  <div key={f.title} className="rounded-2xl p-5 bg-white/80 dark:bg-white/10 border border-white/60 dark:border-white/10 shadow">
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-3xl p-1 bg-gradient-to-br from-sky-300/70 via-fuchsia-300/70 to-pink-300/70 shadow-xl">
            <div className="rounded-3xl p-8 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-white/10">
              <h3 className="text-2xl font-bold">Contact</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Questions or partnership inquiries? Reach us on Discord or Twitter.</p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-2xl px-4 py-3 bg-white/80 dark:bg-white/10 border border-white/60 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Your email" />
                <input className="w-full rounded-2xl px-4 py-3 bg-white/80 dark:bg-white/10 border border-white/60 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Subject" />
                <textarea rows={4} className="sm:col-span-2 w-full rounded-2xl px-4 py-3 bg-white/80 dark:bg-white/10 border border-white/60 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-300" placeholder="Message" />
                <button type="button" className="sm:col-span-2 justify-self-start px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400 text-white shadow hover:shadow-md transition">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
