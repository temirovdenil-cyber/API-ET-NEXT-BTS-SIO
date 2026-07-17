'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl px-6 py-3">
          <Link 
href="/" 
 className="text-xl font-bold text-white" >
<span className="text-indigo-400">MY</span> DIGITAL SCHOOL
 </Link>
   <div className="hidden md:flex items-center gap-8">

    <Link
   href="/"
   className="text-gray-300 hover:text-white transition"
            >
   Accueil
            </Link>

            <Link
              href="/avis"
              className="text-gray-300 hover:text-white transition"
            >
              Avis
            </Link>

            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition"
            >
              Connexion
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-indigo-500 px-4 py-2 text-white font-semibold hover:bg-indigo-400 transition"
            >
              Inscription
            </Link>

          </div>

        </div>
      </nav>
    </header>
  );
}