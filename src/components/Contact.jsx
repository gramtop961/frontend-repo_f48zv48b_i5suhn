import { useState } from 'react'
import { Send, Mail, User, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail || 'Failed to submit')
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s talk about your goals</h2>
            <p className="mt-3 text-slate-600">Share a bit about your exam, timeline, and where you need help. I’ll get back in 24 hours.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700">you@example.com</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <div className="mt-1 relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can I help?" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <div className="mt-1 relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me a bit about your current prep and goals..." />
              </div>
            </div>

            <button disabled={status==='loading'} className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 disabled:opacity-70">
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="mt-4 inline-flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                Message sent! I’ll get back soon.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 inline-flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
