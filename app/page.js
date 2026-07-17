import Link from 'next/link'
import Navbar from '@/components/navbar'
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a1a4e] to-[#0d0d2b] flex items-center justify-center">
        <div className="text-center">

        <h1 className="text-5xl font-bold text-white mb-4">
          MY DIGITAL SCHOOL
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Découvrez les avis des étudiants et partagez votre expérience.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/avis" className="bg-indigo-500 text-white px-6 py-3 rounded-xl">
            Voir les avis
          </Link>
          <Link href="/register" className="bg-white/10 text-white px-6 py-3 rounded-xl">
            Créer un compte
          </Link>

        </div>

      </div>

    </main></>
  )
}