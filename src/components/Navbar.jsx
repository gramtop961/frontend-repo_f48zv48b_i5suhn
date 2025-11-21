import { useState } from 'react'
import { Menu, X, GraduationCap, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-lg">Sahil Topper</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" />
              Get in touch
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded hover:bg-slate-100 text-slate-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded bg-blue-600 text-white text-center">
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
