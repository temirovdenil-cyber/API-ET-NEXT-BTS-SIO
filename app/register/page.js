'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Register } from '@/services/register'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas')
      return
    }
    try {
      const { response } = await Register({ username: name, email, password })
      if (response.ok) {
        document.location.href = '/login'
      }
    } catch (err) {
      console.log('Erreur réseau', err)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a1a4e] to-[#0d0d2b] flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <span className="text-white font-bold text-lg">MY DIGITAL SCHOOL</span>
        </div>
        <button onClick={() => window.history.back()} className="text-white/70 hover:text-white text-sm">← Retour</button>
      </div>
      <div className="flex flex-col md:flex-row flex-1">
        <div className="hidden md:flex w-1/2 items-center justify-center p-12">
          <Image src="/image-register.png" alt="register" width={520} height={400} className="max-w-md w-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Créer votre compte</h1>
          <p className="text-gray-400 mb-8 text-sm">Tu cherches une école du digital en France ? Découvre les formations MyDigitalSchool dans nos 17 campus</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Nom complet</label>
              <input type="text" placeholder="Entrez votre nom" onChange={(e) => setName(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input type="email" placeholder="Entrez votre mail" onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Mot de passe</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="Créez un mot de passe" onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-white">👁</button>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Confirmer le mot de passe</label>
              <div className="relative">
                <input type={showConfirm ? 'text' : 'password'} placeholder="Confirmez votre mot de passe" onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-3 text-gray-400 hover:text-white">👁</button>
              </div>
            </div>
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition-colors">S'inscrire</button>
          </form>
          <p className="text-gray-400 text-center mt-6 text-sm">
            Déjà un compte ? <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">Se connecter</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
