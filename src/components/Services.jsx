import { BrainCircuit, BookOpenCheck, CalendarClock, Headphones, Layers, Trophy } from 'lucide-react'

const items = [
  {
    icon: BrainCircuit,
    title: 'Personalized Study Plan',
    desc: 'Tailored roadmap based on your goals, strengths, and schedule.'
  },
  {
    icon: BookOpenCheck,
    title: 'Daily Doubt Support',
    desc: 'Fast turnaround for questions via chat and weekly live sessions.'
  },
  {
    icon: CalendarClock,
    title: 'Accountability & Tracking',
    desc: 'Weekly check-ins, progress dashboards, and habit building.'
  },
  {
    icon: Headphones,
    title: 'Mock Tests & Analysis',
    desc: 'Exam-like tests with detailed feedback to improve faster.'
  },
  {
    icon: Layers,
    title: 'Resources & Notes',
    desc: 'Curated notes, flashcards, and practice sets—everything organized.'
  },
  {
    icon: Trophy,
    title: 'Strategy Sessions',
    desc: 'Learn time management and scoring techniques from toppers.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What I Offer</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">High-impact mentoring inspired by top performers—designed to help you score more with less stress.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
