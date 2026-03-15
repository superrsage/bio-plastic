import { Icon } from '@iconify/react';

const values = [
  { icon: 'lucide:cpu', label: 'AI Native' },
  { icon: 'lucide:flask-conical', label: 'Lab Validated' },
  { icon: 'lucide:zap', label: 'Rapid Scale' },
];

const members = [
  { name: 'Dr. Elena Thorne', role: 'CSO', bg: 'bg-gray-100', text: 'text-[#1f2937]', shadow: true },
  { name: 'Marcus Chen', role: 'HEAD OF AI', bg: 'bg-[#ec4899]', text: 'text-white' },
  { name: 'Sarah Jenkins', role: 'ENGINEERING', bg: 'bg-[#fef9f3]', text: 'text-[#1f2937]', border: true },
  { name: 'David Voss', role: 'IMPACT', bg: 'bg-gray-100', text: 'text-[#1f2937]', border: true },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-white">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <h3 className="text-4xl font-bold kerning-tight mb-8 uppercase">
            No corporate polish.<br />Just hard science.
          </h3>
          <p className="text-xl opacity-70 mb-12">
            We&apos;re a multidisciplinary team of rebels from polymer chemistry, machine learning,
            and environmental policy who refuse to accept the status quo.
          </p>
          <div className="flex flex-wrap gap-8">
            {values.map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <Icon icon={v.icon} className="text-3xl text-[#ec4899]" />
                <span className="font-bold uppercase tracking-tighter text-sm">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {members.map((m) => (
            <div
              key={m.name}
              className={`${m.bg} ${m.border ? 'border border-gray-100' : ''} ${m.shadow ? 'warm-shadow' : ''} aspect-square flex items-end p-6 overflow-hidden`}
            >
              <span className={`${m.text} font-bold uppercase text-xs leading-none z-10`}>
                {m.name}<br />
                <span className="opacity-40">{m.role}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
