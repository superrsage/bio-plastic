import Image from 'next/image';

export default function Transformation() {
  return (
    <section
      id="transformation"
      className="py-32 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div>
        <div className="relative border border-gray-200 bg-white overflow-hidden">
          {/* Main row */}
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Left — Carbon Waste */}
            <div className="flex flex-col justify-center gap-3 px-10 py-12 md:w-64 shrink-0">
              <span className="inline-block border border-gray-300 text-[10px] font-bold tracking-widest uppercase px-2 py-1 w-fit">
                SYSTEM_INPUT
              </span>
              <h3 className="text-3xl md:text-4xl font-bold kerning-tight uppercase leading-tight">
                CARBON<br />WASTE
              </h3>
              <p className="text-[11px] font-bold tracking-widest uppercase opacity-50">
                [ RAW_POLYMER_STOCKS ]
              </p>
            </div>

            {/* Centre — illustration */}
            <div className="flex-1 flex items-center justify-center py-8">
              <Image
                src="/transformation.png"
                alt="AI molecular transformation from carbon waste to bio-polymer"
                width={480}
                height={340}
                className="object-contain w-full max-w-sm md:max-w-md"
              />
            </div>

            {/* Right — Bio-Polymer */}
            <div className="flex flex-col justify-center items-end gap-3 px-10 py-12 md:w-64 shrink-0 text-right">
              <span className="inline-block border border-[#ec4899] text-[10px] font-bold tracking-widest uppercase px-2 py-1 w-fit text-[#ec4899]">
                SYNTHESIS_OUTPUT
              </span>
              <h3 className="text-3xl md:text-4xl font-bold kerning-tight uppercase leading-tight text-[#ec4899]">
                BIO-<br />POLYMER
              </h3>
              <p className="text-[11px] font-bold tracking-widest uppercase opacity-50">
                [ ASSET_TYPE: BIO_ASSIMILATIVE ]
              </p>
            </div>
          </div>

          {/* Pink bottom bar */}
          <div className="h-1 w-full transformation-gradient" />
        </div>
      </div>
    </section>
  );
}
