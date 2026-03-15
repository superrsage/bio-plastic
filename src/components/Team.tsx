import { Icon } from '@iconify/react';

const values = [
  { icon: 'lucide:cpu', label: 'AI Native' },
  { icon: 'lucide:flask-conical', label: 'Lab Validated' },
  { icon: 'lucide:zap', label: 'Rapid Scale' },
];

const members = [
  { name: 'Dr. Elena Thorne', role: 'CSO', bg: 'bg-forest', text: 'text-white' },
  { name: 'Marcus Chen', role: 'HEAD OF AI', bg: 'bg-earth', text: 'text-white' },
  { name: 'Sarah Jenkins', role: 'ENGINEERING', bg: 'bg-forest/10', text: 'text-forest', border: true },
  { name: 'David Voss', role: 'IMPACT', bg: 'bg-forest/10', text: 'text-forest', border: true },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <h3 className="text-4xl font-black kerning-tight mb-8 uppercase">
            No corporate polish.<br />Just hard science.
          </h3>
          <p className="text-xl opacity-70 mb-12">
            We&apos;re a multidisciplinary team of rebels from polymer chemistry, machine learning,
            and environmental policy who refuse to accept the status quo.
          </p>
          <div className="flex flex-wrap gap-8">
            {values.map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <Icon icon={v.icon} className="text-3xl text-earth" />
                <span className="font-bold uppercase tracking-tighter text-sm">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {members.map((m) => (
            <div
              key={m.name}
              className={`${m.bg} ${m.border ? 'border border-forest/20' : ''} aspect-square flex items-end p-6 relative overflow-hidden`}
            >
              <span className={`${m.text} font-bold uppercase text-xs leading-none z-10`}>
                {m.name}<br />
                <span className="opacity-50">{m.role}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
