import { Clock, MapPin } from 'lucide-react';
import { EccShell } from '@/components/ecc-shell';

const events = [
  {
    id: 1,
    tag: 'Cultos',
    title: 'Culto Especial de Ações de Graças',
    description: 'Venha celebrar conosco todas as bênçãos recebidas neste mês. Teremos a participação do Coral EBD.',
    time: 'Domingo • 19:00',
    location: 'Templo Principal',
  },
  {
    id: 2,
    tag: 'Ação Social',
    title: 'Mutirão de Arrecadação de Alimentos',
    description: 'Ação social promovida pelo Ministério de Assistência Social da Igreja.',
    time: 'Sábado • 09:00',
    location: 'Salão Social',
  },
  {
    id: 3,
    tag: 'EBD Admin',
    title: 'Curso de Capacitação para Professores da EBD',
    description: 'Treinamento sobre novas metodologias pedagógicas para o ensino da Palavra.',
    time: 'Quarta-feira • 19:30',
    location: 'Sala 04 (EBD)',
  },
] as const;

export default function AvisosPage() {
  return (
    <EccShell title="Avisos & Programação da Igreja">
      <div className="grid gap-5 xl:grid-cols-3">
        {events.map((item) => (
          <article key={item.id} className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-4 inline-flex rounded-full border border-[#e7c96a] bg-[#f5e5ae] px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#5b4302]">
              {item.tag}
            </div>

            <h3 className="text-[22px] font-black leading-tight text-slate-800">{item.title}</h3>
            <p className="mt-3 text-[14px] leading-6 text-slate-600">{item.description}</p>

            <div className="mt-5 space-y-2 text-[14px] text-slate-700">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-500" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span>{item.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </EccShell>
  );
}
