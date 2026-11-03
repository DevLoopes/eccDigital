import { Bell, BookOpen, CalendarDays, ChevronRight, FileText, Play, Sparkles, Users } from 'lucide-react';
import { EccShell } from '@/components/ecc-shell';

const featuredNews = [
  {
    title: 'Retiro de Oração e Renovação',
    tag: 'Evento',
    date: '26 de nov',
    excerpt: 'Inscrições abertas para um encontro especial de oração, adoração e renovação espiritual.',
    accent: 'from-[#f0b52d] via-[#f7d777] to-[#fff3c4]',
  },
  {
    title: 'Nova sequência de estudos da ECC',
    tag: 'Material',
    date: '18 de nov',
    excerpt: 'A nova trilha aborda fundamentos da fé, discipulado e vida prática em Cristo.',
    accent: 'from-[#1d4f8c] via-[#3a6eaf] to-[#9cc2ff]',
  },
  {
    title: 'Noite de Adoração e Comunhão',
    tag: 'Comunidade',
    date: '02 de dez',
    excerpt: 'Uma noite de congregação, louvor e fortalecimento da vida em comunidade.',
    accent: 'from-[#0f172a] via-[#1e293b] to-[#334155]',
  },
] as const;

const quickStats = [
  { label: 'Estudos ativos', value: '48', icon: BookOpen, color: 'bg-[#e7f0ff] text-[#1d4f8c]' },
  { label: 'Eventos no mês', value: '12', icon: CalendarDays, color: 'bg-[#fff3d9] text-[#a46a00]' },
  { label: 'Membros ativos', value: '1.2k', icon: Users, color: 'bg-[#eaf8ee] text-[#256c43]' },
] as const;

const latestAnnouncements = [
  {
    title: 'Aula aberta da próxima semana',
    description: 'A reunião será conduzida pela equipe de discipulado com foco em vida devocional e estudo bíblico.',
    icon: Bell,
  },
  {
    title: 'Material em destaque',
    description: 'O estudo “Fundamentos do Batismo e Ceia do Senhor” foi atualizado com material complementar.',
    icon: FileText,
  },
  {
    title: 'Agenda da juventude',
    description: 'Confira a programação do próximo encontro jovem e os grupos de estudo disponíveis.',
    icon: CalendarDays,
  },
] as const;

export default function NoticiasPage() {
  return (
    <EccShell title="Painel de notícias">
      <div className="space-y-8">
        <div className="grid gap-5 xl:grid-cols-[1.45fr_0.55fr]">
          <article className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#0b1c2d] text-white shadow-[0_16px_35px_rgba(15,23,42,0.18)]">
            <div className={`h-64 bg-gradient-to-br ${featuredNews[0].accent} p-6`}>
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/90">
                    {featuredNews[0].tag}
                  </span>
                  <button type="button" className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    Ver mais
                  </button>
                </div>

                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0d2339]/60 px-3 py-1 text-[11px] font-semibold text-slate-100">
                    <Sparkles className="h-3.5 w-3.5" />
                    Destaque da semana
                  </div>
                  <h3 className="max-w-xl text-[30px] font-black uppercase leading-[1.1] tracking-[-0.06em] text-white">
                    {featuredNews[0].title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-slate-100/85">{featuredNews[0].excerpt}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-700 bg-slate-950/30 px-5 py-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300">{featuredNews[0].date}</div>
              <button type="button" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0b52d]">
                Acessar publicação
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </article>

          <div className="space-y-4">
            {featuredNews.slice(1).map((item) => (
              <article key={item.title} className="rounded-[18px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                <div className={`mb-4 rounded-[12px] bg-gradient-to-r ${item.accent} p-3`}>
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-white/90">{item.tag}</div>
                </div>
                <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">{item.date}</div>
                <h4 className="text-[20px] font-black uppercase tracking-[-0.04em] text-slate-800">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {quickStats.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-[18px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-[11px] font-black uppercase tracking-[0.12em] text-slate-400">Hoje</div>
              </div>
              <div className="mt-5 text-[32px] font-black uppercase tracking-[-0.06em] text-slate-800">{value}</div>
              <div className="mt-1 text-sm text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf2fb] text-[#1d4f8c]">
                  <Bell className="h-4 w-4" />
                </div>
                <h3 className="text-[28px] font-black uppercase tracking-[-0.05em] text-slate-800">Últimas notícias</h3>
              </div>
            </div>

            <div className="space-y-4">
              {latestAnnouncements.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-3 rounded-[14px] border border-slate-200 bg-slate-50 p-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dfeaf5] text-[#1d4f8c]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[18px] font-black text-slate-800">{title}</div>
                    <p className="mt-1 text-sm text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff3d9] text-[#a46a00]">
                  <Play className="h-4 w-4" />
                </div>
                <h3 className="text-[28px] font-black uppercase tracking-[-0.05em] text-slate-800">Em destaque</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[14px] bg-[#0a1a2c] p-4 text-white">
                <div className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f0b52d]">Videoaula</div>
                <div className="mt-3 text-[22px] font-black uppercase tracking-[-0.04em]">O papel da oração na vida cristã</div>
                <p className="mt-2 text-sm text-slate-300">Uma reflexão prática sobre perseverança, intimidade com Deus e o cotidiano de fé.</p>
              </div>

              <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-500">Próximo evento</div>
                    <div className="mt-1 text-[18px] font-black text-slate-800">Noite de Oração</div>
                  </div>
                  <div className="rounded-full bg-[#dff0df] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#265a35]">
                    02 dez
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </EccShell>
  );
}
