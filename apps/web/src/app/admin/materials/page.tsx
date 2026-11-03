import Link from 'next/link';
import { EccShell } from '@/components/ecc-shell';
import { themes } from '@/data/ecc-data';

export default function AdminMaterialsPage() {
  return (
    <EccShell title="Administração de Materiais">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Novo material</h2>
          <Link href="/" className="text-sm text-blue-300 hover:text-blue-200">Voltar ao início</Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <label className="mb-2 block text-sm text-slate-300">Título</label>
            <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white" placeholder="Ex: Estudos da ECC - Semana 1" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <label className="mb-2 block text-sm text-slate-300">Tema</label>
            <select className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white">
              {themes.map((theme) => (
                <option key={theme.id} value={theme.name}>{theme.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <label className="mb-2 block text-sm text-slate-300">URL do Google Drive</label>
          <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white" placeholder="https://drive.google.com/..." />
        </div>

        <div className="flex justify-end">
          <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
            Salvar material
          </button>
        </div>
      </div>
    </EccShell>
  );
}
