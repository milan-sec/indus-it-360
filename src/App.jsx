import { useEffect, useState } from "react";
import previewImage from "./assets/indus.png";


export default function App() {
  const [dark, setDark] = useState(() => {
    // On garde le choix utilisateur si déjà défini
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // sinon par défaut dark
    return true;
  });

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);


  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
          <a href="#top" className="text-xl font-bold tracking-tight">
            INDUS-IT <span className="text-zinc-500">360</span>
          </a>

          <div className="flex gap-3 items-center">
            <nav className="hidden md:flex gap-5 text-sm text-zinc-600 dark:text-zinc-300">
              <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">
                Services
              </a>
              <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white">
                Projets
              </a>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">
                Contact
              </a>
            </nav>

            <button
              onClick={() => setDark((v) => !v)}
              className="px-3 py-2 rounded-xl border border-zinc-300 hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
              type="button"
              aria-label="Toggle theme"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            <a
              href="#contact"
              className="bg-zinc-900 text-white px-4 py-2 rounded-xl hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main
        id="top"
        className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            React + Tailwind • design moderne
          </p>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Des sites modernes, rapides{" "}
            <span className="text-zinc-500 dark:text-zinc-400">et efficaces</span>.
          </h1>

          <p className="mt-6 text-zinc-600 dark:text-zinc-300 max-w-xl">
            INDUS-IT 360 crée des sites vitrine, landing pages et refontes pro pour donner confiance
            et convertir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-zinc-900 text-white px-6 py-3 rounded-xl hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Demander un devis
            </a>

            <a
              href="#services"
              className="border border-zinc-300 px-6 py-3 rounded-xl hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Voir les services
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-300">
            {["✅ Responsive", "✅ Rapide", "✅ Design propre"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white px-3 py-1 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

<div className="rounded-3xl overflow-hidden shadow-lg">
  <img
    src={previewImage}
    alt="Aperçu du site INDUS-IT 360"
    className="w-full h-72 md:h-80 object-cover"
  />
</div>

      </main>

      {/* Services */}
      <section id="services" className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Simple, clair, efficace : l’essentiel pour un site qui donne confiance.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Site vitrine",
                desc: "Présenter ton activité et convertir des visiteurs en clients.",
              },
              { title: "Landing page", desc: "Une page optimisée conversion avec CTA et structure clean." },
              { title: "Refonte", desc: "Moderniser design, lisibilité, mobile et performance." },
              { title: "Maintenance", desc: "Corrections, mises à jour et petites évolutions." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800"
              >
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Projets</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Remplace ces cartes par tes vrais projets (liens GitHub / Vercel / Netlify).
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Landing – Restaurant", tag: "Landing", desc: "CTA + sections claires + contact." },
              { title: "Vitrine – Artisan", tag: "Vitrine", desc: "Présentation + galerie + formulaire." },
              { title: "Dashboard – Perso", tag: "UI", desc: "Composants réutilisables + design clean." },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Demander un devis</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Contacte-nous via le formulaire ci-dessous.
          </p>

          <div className="mt-10">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
              <h3 className="text-lg font-semibold mb-4">Formulaire de contact</h3>

              <div className="w-full h-[700px] rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-zinc-800">
                <iframe
                  src="https://form.jotform.com/milanseisei/feedback-form"
                  className="w-full h-full border-0"
                  title="Formulaire de contact INDUS-IT 360"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-3 justify-between text-sm text-zinc-600 dark:text-zinc-300">
          <p>© 2026 — INDUS-IT 360</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-zinc-900 dark:hover:text-white">
              Services
            </a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
