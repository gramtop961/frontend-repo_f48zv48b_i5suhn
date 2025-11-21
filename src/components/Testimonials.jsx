import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'The mentorship transformed my preparation. Weekly plans and consistent feedback kept me on track.',
    name: 'Aarav Sharma',
    meta: 'JEE Main 99.6%ile'
  },
  {
    quote: 'Practical strategies and memory techniques helped me jump by 120 marks in 6 weeks.',
    name: 'Ishita Verma',
    meta: 'NEET 665/720'
  },
  {
    quote: 'I stopped wasting time on low-yield topics. The plan was sharp and realistic for my schedule.',
    name: 'Rohan Gupta',
    meta: 'CBSE XII 96%'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Students Say</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A few words from students and parents who experienced the program.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Quote className="w-6 h-6 text-blue-600" />
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-4">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-600">{t.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
