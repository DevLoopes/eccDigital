'use client';

import { useMemo, useState } from 'react';
import { BookOpen, ChevronRight, Download, Eye, FileText, Search, X } from 'lucide-react';
import { EccShell } from '@/components/ecc-shell';

const materials = [
  {
    id: 1,
    title: 'A Importância da Oração no Cotidiano',
    author: 'Pr. Carlos Oliveira',
    size: '2.4 MB',
    category: 'Vida Cristã',
    date: '13/10/2026',
    format: 'PDF',
    driveUrl: 'https://drive.google.com/',
    description: 'Estudo sobre perseverança na oração e fidelidade espiritual no dia a dia.',
  },
  {
    id: 2,
    title: 'Entendendo os Pentecostes e os Dons',
    author: 'Pr. Ana Silva',
    size: '1.8 MB',
    category: 'Teologia Básica',
    date: '13/09/2026',
    format: 'PDF',
    driveUrl: 'https://drive.google.com/',
    description: 'Uma introdução prática aos dons espirituais e ao papel do Espírito Santo na igreja.',
  },
  {
    id: 3,
    title: 'O Sermão do Monte e os Valores do Reino',
    author: 'Pr. Carlos Oliveira',
    size: '3.1 MB',
    category: 'Vida Cristã',
    date: '15/08/2026',
    format: 'PDF',
    driveUrl: 'https://drive.google.com/',
    description: 'Aprofundamento sobre os princípios do Reino de Deus e a vida obediente ao Senhor.',
  },
  {
    id: 4,
    title: 'Os Reformas Protestantes e as 5 Solas',
    author: 'Sem. Roberto Alves',
    size: '4.5 MB',
    category: 'História da Igreja',
    date: '02/08/2026',
    format: 'PDF',
    driveUrl: 'https://drive.google.com/',
    description: 'Um resgate histórico das reformas e da mensagem central da fé reformada.',
  },
  {
    id: 5,
    title: 'Doutrinas dos Últimos Tempos (Escatologia)',
    author: 'Pr. Carlos Oliveira',
    size: '2.9 MB',
    category: 'Doutrinas Bíblicas',
    date: '20/07/2026',
    format: 'PDF',
    driveUrl: 'https://drive.google.com/',
    description: 'Estudo sobre a esperança cristã, a vinda de Cristo e o futuro prometido por Deus.',
  },
  {
    id: 6,
    title: 'Fundamentos do Batismo e Ceia do Senhor',
    author: 'Prof. Mariana Costa',
    size: '1.5 MB',
    category: 'Nova Vida em Cristo',
    date: '10/06/2026',
    format: 'PDF',
    driveUrl: 'https://drive.google.com/',
    description: 'Reflexão bíblica sobre os significados e aplicações do batismo e da ceia.',
  },
] as const;

const themeCards = [
  { id: 'Vida Cristã', name: 'Vida Cristã', count: 12, color: 'bg-slate-950 text-white' },
  { id: 'Teologia Básica', name: 'Teologia Básica', count: 8, color: 'bg-[#f3cb5d] text-slate-900' },
  { id: 'História da Igreja', name: 'História da Igreja', count: 15, color: 'bg-[#dfeaf5] text-slate-700' },
  { id: 'Doutrinas Bíblicas', name: 'Doutrinas Bíblicas', count: 8, color: 'bg-[#ebd1b0] text-slate-800' },
  { id: 'Nova Vida em Cristo', name: 'Nova Vida em Cristo', count: 18, color: 'bg-[#dff0df] text-slate-700' },
] as const;

export default function TemasPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewPdf, setPreviewPdf] = useState<(typeof materials)[number] | null>(null);

  const filteredMaterials = useMemo(() => {
    return materials.filter((item) => {
      const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const shouldShowClearFilter = selectedCategory !== 'Todos';

  return (
    <EccShell title="Meus temas de estudo">
      <div className="space-y-8">
        {shouldShowClearFilter && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setSelectedCategory('Todos')}
              className="text-[13px] font-medium text-[#1d4f8c] transition hover:text-[#163d72]"
            >
              Limpar filtro (Ver todos)
            </button>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {themeCards.map((theme) => {
            const isSelected = selectedCategory === theme.name;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => setSelectedCategory(theme.name)}
                className={`flex min-h-[150px] cursor-pointer flex-col justify-between rounded-[14px] border bg-white p-4 text-left shadow-[0_1px_0_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-md ${
                  isSelected ? 'border-[#1d4f8c] shadow-[0_0_0_2px_rgba(29,79,140,0.12)]' : 'border-[#d3dae3]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${theme.color}`}>
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-[#edf2f8] px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-600">
                    {theme.count} Aulas
                  </span>
                </div>

                <div>
                  <div className="text-[18px] font-black text-slate-800">{theme.name}</div>
                  <div className="mt-3 flex items-center gap-1 text-[12px] font-medium text-slate-600">
                    Acessar módulos
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <section className="mt-8 overflow-hidden rounded-[18px] border border-[#d3dae3] bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
        <div className="flex flex-col gap-4 border-b border-slate-200 bg-[#f5f7fa] px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-[28px] font-black uppercase tracking-[-0.05em] text-slate-800">Últimas aulas adicionadas</h3>
            <div className="mt-1 text-[15px] text-slate-500">
              Exibindo lições para: <span className="font-semibold text-[#1d4f8c]">{selectedCategory}</span>
            </div>
          </div>

          <div className="relative w-full md:w-[310px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              type="text"
              placeholder="Buscar por título ou autor..."
              className="w-full rounded-[12px] border border-[#d3dae3] bg-white py-2.5 pl-9 pr-3 text-[14px] text-slate-700 placeholder:text-slate-400 focus:border-[#1d4f8c] focus:outline-none focus:ring-2 focus:ring-[#c9dbf7]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr className="bg-[#0a1a2c] text-white">
                <th className="px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em]">Título da aula</th>
                <th className="px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em]">Tema / categoria</th>
                <th className="px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em]">Data</th>
                <th className="px-5 py-4 text-[12px] font-black uppercase tracking-[0.14em]">Formato</th>
                <th className="px-5 py-4 text-right text-[12px] font-black uppercase tracking-[0.14em]">Ações</th>
              </tr>
            </thead>

            <tbody>
              {filteredMaterials.length > 0 ? (
                filteredMaterials.map((item) => (
                  <tr key={item.id} className="border-b border-slate-200 bg-white hover:bg-slate-50">
                    <td className="px-5 py-5 align-top">
                      <div className="font-black text-slate-800">{item.title}</div>
                      <div className="mt-1 text-[12px] text-slate-500">Autor: {item.author} • {item.size}</div>
                    </td>

                    <td className="px-5 py-5 align-top">
                      <span className="inline-flex rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-2.5 py-1 text-[12px] font-semibold text-[#2857a6]">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-5 py-5 align-top text-[14px] font-medium text-slate-600">{item.date}</td>

                    <td className="px-5 py-5 align-top">
                      <span className="inline-flex rounded-[8px] bg-[#fee2e2] px-2 py-1 text-[11px] font-black uppercase tracking-[0.08em] text-[#b91c1c]">
                        {item.format}
                      </span>
                    </td>

                    <td className="px-5 py-5 align-top text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setPreviewPdf(item)}
                          className="inline-flex items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-100 px-3 py-2 text-[12px] font-semibold text-slate-700 transition hover:bg-slate-200"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          Visualizar
                        </button>
                        <a
                          href={item.driveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-[10px] bg-[#1d4f8c] px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-[#163e72]"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Baixar PDF
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <FileText className="h-9 w-9 text-slate-300" />
                      <span className="font-medium">Nenhum material encontrado para essa busca.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {previewPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#0a1a2c] px-5 py-4 text-white">
              <div className="flex items-center gap-2 text-base font-bold">
                <FileText className="h-5 w-5 text-[#b4d0ff]" />
                Visualizar material
              </div>
              <button type="button" onClick={() => setPreviewPdf(null)} className="text-slate-300 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <span className="inline-flex rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-2.5 py-1 text-[12px] font-semibold text-[#2857a6]">
                  {previewPdf.category}
                </span>
                <h4 className="mt-3 text-[28px] font-black text-slate-800">{previewPdf.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{previewPdf.description}</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="flex items-center justify-between gap-3">
                  <span>Autor</span>
                  <span className="font-semibold text-slate-800">{previewPdf.author}</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span>Data</span>
                  <span className="font-semibold text-slate-800">{previewPdf.date}</span>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <span>Formato</span>
                  <span className="font-semibold text-slate-800">{previewPdf.format} ({previewPdf.size})</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a href={previewPdf.driveUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-xl bg-[#1d4f8c] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#163e72]">
                  Baixar PDF do Google Drive
                </a>
                <button type="button" onClick={() => setPreviewPdf(null)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </EccShell>
  );
}
