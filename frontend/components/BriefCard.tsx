export default function BriefCard({ data }: any) {
  const colors = [
    "bg-cyan-400", "bg-violet-400", "bg-emerald-400",
    "bg-amber-400", "bg-pink-400", "bg-sky-400"
  ];

  const threatColors: any = {
    High: "bg-red-500",
    Medium: "bg-amber-400",
    Low: "bg-emerald-400"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-3">{data.company}</h1>
          <p className="text-slate-300 text-lg max-w-3xl">{data.summary}</p>
        </div>

        {/* Pitch + Confidence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-2 bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">Pitch</p>
            <p className="text-white text-lg leading-relaxed">{data.pitch}</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col items-center justify-center">
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-4">Deal Win Rate</p>
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 36 36" className="w-28 h-28 -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1e293b" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke="#22d3ee" strokeWidth="3"
                  strokeDasharray={`${data.confidence} ${100 - data.confidence}`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-cyan-400">
                {data.confidence}%
              </span>
            </div>
          </div>
        </div>

        {/* Products - Horizontal Bars */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-6">
          <p className="text-xs uppercase tracking-widest text-violet-400 mb-5">Products</p>
          <div className="space-y-3">
            {data.products?.map((item: string, i: number) => (
              <div key={item}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-200">{item}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${colors[i % colors.length]}`}
                    style={{ width: `${85 - i * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customers + Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Customers - Donut */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-5">Customers</p>
            <div className="flex items-center gap-6">
              <svg viewBox="0 0 36 36" className="w-28 h-28 shrink-0">
                {data.customers?.map((_: any, i: number) => {
                  const total = data.customers.length;
                  const slice = 100 / total;
                  const offset = i * slice;
                  const segColors = ["#34d399","#22d3ee","#a78bfa","#f59e0b","#f472b6"];
                  return (
                    <circle
                      key={i} cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke={segColors[i % segColors.length]}
                      strokeWidth="3.5"
                      strokeDasharray={`${slice - 1} ${100 - slice + 1}`}
                      strokeDashoffset={`${25 - offset}`}
                    />
                  );
                })}
              </svg>
              <ul className="space-y-2">
                {data.customers?.map((item: string, i: number) => {
                  const dotColors = ["bg-emerald-400","bg-cyan-400","bg-violet-400","bg-amber-400","bg-pink-400"];
                  return (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColors[i % dotColors.length]}`} />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Opportunities - Pills */}
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-5">Opportunities</p>
            <div className="flex flex-wrap gap-2">
              {data.opportunities?.map((item: string, i: number) => {
                const pillColors = [
                  "bg-amber-400/20 text-amber-300 border-amber-400/30",
                  "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
                  "bg-violet-400/20 text-violet-300 border-violet-400/30",
                  "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
                ];
                return (
                  <span key={item} className={`px-3 py-1.5 rounded-full text-sm border ${pillColors[i % pillColors.length]}`}>
                    {item}
                  </span>
                );
              })}
            </div>
          </div>

        </div>

        {/* Risks */}
        {data.risks?.length > 0 && (
          <div className="bg-slate-800 rounded-2xl p-6 border border-red-900/40 mb-6">
            <p className="text-xs uppercase tracking-widest text-red-400 mb-4">Risks</p>
            <ul className="space-y-2">
              {data.risks.map((item: string) => (
                <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                  <span className="text-red-400 mt-0.5">▲</span> {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Competitors */}
        {data.competitors?.length > 0 && (
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 mb-6">
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-4">Competitors</p>
            <div className="flex flex-wrap gap-3">
              {data.competitors.map((c: any) => (
                <a
                  key={c.name}
                  href={"/profile/" + c.name}
                  className="px-5 py-2 rounded-xl bg-slate-700 hover:bg-cyan-500 hover:text-black text-white text-sm font-semibold transition"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* News */}
        {data.news?.length > 0 && (
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <p className="text-xs uppercase tracking-widest text-sky-400 mb-4">Latest News</p>
            <ul className="space-y-3">
              {data.news.slice(0, 5).map((item: any) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="text-sky-300 hover:text-cyan-400 text-sm font-medium transition">
                    {item.title}
                  </a>
                  <p className="text-slate-400 text-xs mt-0.5">{item.body?.slice(0, 100)}...</p>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}