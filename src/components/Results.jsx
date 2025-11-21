export default function Results() {
  const stats = [
    { label: 'Top 1% Ranks', value: '120+' },
    { label: 'Avg. Score Improvement', value: '38%' },
    { label: 'Mentorship Hours', value: '5k+' },
    { label: 'Cities Reached', value: '30+' },
  ]

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-blue-50 to-indigo-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Real Results</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Outcomes from students I’ve guided across competitive and board exams.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
