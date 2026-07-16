'use client'
import { useState } from 'react'
import { Login } from '@/services/login'
import Toast from '@/components/toast'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const { response, result } = await Login({ email, password })
      if (response.ok) {
        localStorage.setItem('token', result.token)
        document.location.href = '/avis'
      } else {
        setMessage(result.message || 'Identifiants incorrects.')
        setError(true)
        setTimeout(() => setError(false), 3000)
      }
    } catch (err) {
      setMessage('Erreur réseau, veuillez réessayer.')
      setError(true)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d2b] via-[#1a1a4e] to-[#0d0d2b] flex flex-col">
      {message && error && <Toast message={message} />}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"> <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" /> </div>
          <span className="text-white font-bold text-lg">MY DIGITAL SCHOOL</span>
        </div>
        <button onClick={() => window.history.back()} className="text-white/70 hover:text-white text-sm flex items-center gap-1">
          ← Retour en arrière
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-1">
        <div className="hidden md:flex w-1/2 items-center justify-center p-12">
          <img src="/image-login.png" alt="login" className="max-w-md w-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-1">Bienvenue !</h1>
          <p className="text-indigo-300 mb-8 text-sm">Connectez vous pour continuer</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input type="email" placeholder="Entrez votre mail" onChange={(e) => setEmail(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1">Mot de passe</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)} className="w-full bg-white/5 text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-indigo-400 placeholder:text-gray-500" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-white">👁</button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 accent-indigo-500" />
                <label htmlFor="remember" className="text-gray-300 text-sm">Se souvenir de moi</label>
              </div>
              <a href="/password-forgot" className="text-indigo-400 hover:text-indigo-300 text-sm">Mot de passe oublié ?</a>
            </div>
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition-colors">Se connecter</button>
          </form>
          <p className="text-gray-400 text-center mt-6 text-sm">
            Pas de compte ? <a href="/register" className="text-indigo-400 hover:text-indigo-300 font-medium">S'inscrire</a>
          </p>
        </div>
      </div>
    </div>
  )
}
