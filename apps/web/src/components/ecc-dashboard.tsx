'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, BookOpen, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { navigationItems } from '@/data/ecc-data';

export function EccDashboard({ children, title }: { children: ReactNode; title: string }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-[#edf3f8] text-slate-800">
      <aside className="sticky top-0 flex h-screen w-[290px] shrink-0 flex-col justify-between bg-[#0a1a2a] text-slate-100">
        <div>
          <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0b52d] text-sm font-bold text-slate-900 shadow-lg shadow-[#f0b52d]/30">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-white">Portal ECC</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8caed8]">Igreja Cristã</div>
            </div>
          </div>

          <nav className="space-y-1 p-4">
            {navigationItems.map(({ id, href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={id}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                    active ? 'bg-[#1d4f8c] text-white shadow-lg shadow-slate-950/30' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                  <ChevronRight className="ml-auto h-4 w-4 opacity-80" />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4 p-4">
          <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
            <div className="mb-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <span>Modo de Acesso</span>
              <span className="rounded-full bg-slate-700 px-2 py-1 text-[9px] text-slate-200">ALUNO</span>
            </div>

            <button type="button" className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-700">
              Área do Professor (Admin)
            </button>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/80 p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0b52d] text-xs font-bold text-slate-900">AS</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-white">Ana Silva</div>
              <div className="text-[11px] text-slate-400">Membro / Aluno</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#edf3f8]">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-[#0b1c2d] px-6 py-5 text-white shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-[18px] font-black uppercase tracking-[0.15em] text-white">
              <span>PORTAL DE AULAS -</span>
              <span className="text-[#f0b52d]">ECC DIGITAL</span>
            </div>
            <div className="mt-1 text-sm text-slate-400">Escola Biblica Dominical — Faça download das lições e acompanhe os materiais da semana.</div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Ativo
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="space-y-8 p-6">
            <section>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#dfeaf5] text-[#1d4f8c] shadow-sm">
                    <Bell className="h-4 w-4" />
                  </div>
                  <h2 className="text-[30px] font-black uppercase tracking-[-0.05em] text-slate-800">{title}</h2>
                </div>

                <button type="button" className="rounded-xl bg-[#1d4f8c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#163e72]">
                  Acessar material
                </button>
              </div>

              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
