import { EccShell } from '@/components/ecc-shell';

export default function PerfilPage() {
  return (
    <EccShell title="Meu Perfil">
      <div className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[#f0b52d] bg-gradient-to-br from-[#d85f5f] to-[#7a2f4a] text-lg font-black text-white">
            <span>AS</span>
          </div>

          <div>
            <div className="text-[22px] font-black tracking-[-0.04em] text-slate-800">Ana Silva</div>
            <div className="text-[14px] text-slate-500">Membro da EDB • Classe Betel</div>
            <div className="mt-2 inline-flex rounded-full bg-[#dfeaf5] px-2.5 py-1 text-[12px] font-bold text-[#1d4f8c]">
              Perfil: Aluno ECC
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-4 text-[20px] font-black uppercase tracking-[-0.04em] text-slate-800">Estatísticas de Estudo</div>

          <div className="grid max-w-[560px] gap-4 md:grid-cols-2">
            <div className="rounded-[14px] border border-slate-200 bg-[#f7fafc] p-4 text-center">
              <div className="text-[32px] font-black leading-none text-[#1d4f8c]">14</div>
              <div className="mt-2 text-[14px] text-slate-600">Aulas baixadas</div>
            </div>

            <div className="rounded-[14px] border border-slate-200 bg-[#f7fafc] p-4 text-center">
              <div className="text-[32px] font-black leading-none text-[#f0b52d]">92%</div>
              <div className="mt-2 text-[14px] text-slate-600">Frequência ECC</div>
            </div>
          </div>
        </div>
      </div>
    </EccShell>
  );
}
