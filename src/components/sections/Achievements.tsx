import { SITE_CONTENT } from "../../data/siteContent";
import { ICON_MAP } from "../../data/icons";

function Achievements() {
  const { achievements } = SITE_CONTENT;

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Our Impact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {achievements.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{achievements.subheading}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.metrics.map((metric, i) => {
            const Icon = ICON_MAP[metric.icon as keyof typeof ICON_MAP];
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md mx-auto mb-5 group-hover:shadow-blue-300 transition-shadow duration-300">
                  {Icon && <Icon size={26} className="text-white" />}
                </div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-slate-900 font-semibold text-base mb-3">{metric.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;