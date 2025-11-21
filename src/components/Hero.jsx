import { ArrowRight, ShieldCheck, Users, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              <ShieldCheck className="w-4 h-4" /> Trusted by students and parents
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Achieve your best with Sahil Topper
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Personalized learning plans, doubt clearing, and strategic guidance to help you top your exams.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">
                Get a free consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50">
                Explore services
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <Users className="w-5 h-5 text-blue-600" />
                <p className="mt-2 text-sm text-slate-600">1:1 Mentorship</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <Award className="w-5 h-5 text-blue-600" />
                <p className="mt-2 text-sm text-slate-600">Result Oriented</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <p className="mt-2 text-sm text-slate-600">Trusted Guidance</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Mentorship" className="w-full h-[420px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
