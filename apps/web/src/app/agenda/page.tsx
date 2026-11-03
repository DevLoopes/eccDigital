import { EccShell } from '@/components/ecc-shell';

const highlights = [
  {
    label: 'Destaque',
    title: 'Conectados: Vigília de Jovens',
    description: 'Uma noite inesquecível de louvor, oração e busca fervorosa pela presença de Deus.',
    preacher: 'Preletor: Pr. Lucas Mendes',
    date: '24 de Outubro · 22:00',
    kind: 'Conferir presença',
  },
  {
    label: 'Social',
    title: 'Cine & Pipoca + Debate Cosmovião',
    description: 'Exibição de documentário seguida de mesa redonda sobre fé e cultura contemporânea.',
    preacher: 'Preletor: Líderez de Mocidade',
    date: '07 de Novembro · 18:00',
    kind: 'Confirmar presença',
  },
] as const;

export default function AgendaPage() {
  return (
    <EccShell title="Programação Jovem">
      <div className="space-y-6">
        <div className="rounded-[26px] bg-[#0f1e3a] px-8 py-7 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
          <div className="mb-3 inline-flex rounded-md bg-[#f0c64d] px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#0f1e3a]">
            Mocidade & Juventude
          </div>

          <h3 className="text-[38px] font-black uppercase leading-tight tracking-[-0.05em] text-white">Conexão Jovem EBD</h3>
          <p className="mt-3 max-w-3xl text-base text-slate-300">
            Espaço dedicado aos jovens da igreja com cronograma de cultos, célula, retiros e materiais especiais de estudo.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.label} className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <div className="mb-4 flex items-center justify-between text-[12px] font-black uppercase tracking-[0.14em] text-slate-600">
                <span className="rounded-full bg-[#f4d67a] px-2.5 py-1 text-[#3d2f0b]">{item.label}</span>
                <span className="flex items-center gap-2 text-slate-500">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-400 text-[10px]">◔</span>
                  {item.date}
                </span>
              </div>

              <h4 className="text-[26px] font-black leading-tight text-slate-800">{item.title}</h4>
              <p className="mt-3 text-[14px] leading-6 text-slate-600">{item.description}</p>

              <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
                <div className="text-[13px] text-slate-500">{item.preacher}</div>
                <button
                  type="button"
                  className="rounded-lg bg-[#1d4f8c] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#163e72]"
                >
                  Confirmar presença
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </EccShell>
  );
}
