'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [envoye, setEnvoye] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      setEnvoye(true)
    } catch (err) {
      console.error('Erreur:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0d0d1f] to-[#050510] flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
      <span className="text-white font-bold text-lg">MY DIGITAL SCHOOL</span>
    </div>
    <Link href="/" className="text-white/70 hover:text-white text-sm">← Retour à l&apos;accueil</Link>
  </div>
  <div className="flex flex-col md:flex-row flex-1 items-center px-6 md:px-0">
    <div className="w-full md:w-1/2 md:px-16 mb-8 md:mb-0 pt-8 md:pt-0">
      <Image src="/image-forgot.png" alt="forgot" width={400} height={300} className="max-w-xs w-full mb-6 hidden md:block" />
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mot de passe oublié</h1>
          <p className="text-gray-400 text-sm">Entrez votre mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>  </div>
        <div className="w-full md:w-1/2 flex justify-center pb-8 md:pb-0">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 w-full max-w-md">
            {envoye ? (
              <div className="text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h2 className="text-white font-bold text-xl mb-2">Email envoyé !</h2>
                <p className="text-gray-400 text-sm mb-6">Vérifiez votre boite mail pour le lien de réinitialisation.</p>
                <a href="/login" className="text-indigo-400 hover:text-indigo-300 text-sm">Retour à la connexion</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Email</label>
                  <input type="email" placeholder="Entrez votre mail" onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
                </div>
                <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition-colors">Envoyer le lien</button>
                <div className="text-center">
                  <Link href="/login" className="text-indigo-400 hover:text-indigo-300 text-sm">Retour à la connexion</Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
