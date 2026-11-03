import { Bell, Calendar, Home, Layers, User } from 'lucide-react';

export const navigationItems = [
  { id: 'inicio', href: '/', label: 'Início', icon: Home },
  { id: 'temas', href: '/temas', label: 'Meus Temas', icon: Layers },
  { id: 'avisos', href: '/avisos', label: 'Avisos da Igreja', icon: Bell },
  { id: 'agenda', href: '/agenda', label: 'Programação Jovem', icon: Calendar },
  { id: 'perfil', href: '/perfil', label: 'Meu Perfil', icon: User },
] as const;

export const themes = [
  { id: 'fundamentos-da-fe', name: 'Fundamentos da Fé', accent: 'from-blue-500 to-cyan-400' },
  { id: 'discipulado-espiritual', name: 'Disciplina Espiritual', accent: 'from-amber-400 to-orange-400' },
  { id: 'comunhao-e-ministerio', name: 'Comunhão e Ministério', accent: 'from-emerald-500 to-teal-400' },
  { id: 'evangelismo-e-missoes', name: 'Evangelismo e Missões', accent: 'from-violet-500 to-fuchsia-400' },
  { id: 'adoração-e-vida-espiritual', name: 'Adoração e Vida Espiritual', accent: 'from-pink-500 to-rose-400' },
] as const;

export const materials = [
  {
    id: 1,
    title: 'Apostila: Fundamentos da Fé Cristã',
    author: 'Pr. Daniel & Elaine',
    type: 'PDF',
    theme: 'Fundamentos da Fé',
    date: '12 Mar 2026',
    duration: '18 min',
    driveUrl: 'https://drive.google.com/',
  },
  {
    id: 2,
    title: 'Estudo: Disciplina de Oração e Consagração',
    author: 'Min. Caroline Silva',
    type: 'Vídeo',
    theme: 'Disciplina Espiritual',
    date: '08 Mar 2026',
    duration: '27 min',
    driveUrl: 'https://drive.google.com/',
  },
  {
    id: 3,
    title: 'Material: Comunhão e Liderança no Ministério',
    author: 'Equipe ECC',
    type: 'PDF',
    theme: 'Comunhão e Ministério',
    date: '03 Mar 2026',
    duration: '14 min',
    driveUrl: 'https://drive.google.com/',
  },
] as const;

export const announcements = [
  {
    id: 1,
    title: 'Retiro de Oração e Renovação',
    body: 'Inscrições abertas para o retiro de oração com foco em renovação espiritual, entrega e intimidade com Deus.',
    tag: 'Evento',
  },
  {
    id: 2,
    title: 'Aula aberta da próxima semana',
    body: 'A próxima reunião será conduzida pela equipe de discipulado e estudo bíblico em pequenos grupos.',
    tag: 'Comunicado',
  },
] as const;

export const schedule = [
  { id: 1, title: 'Aula de Fundamentos da Fé', date: '25 Mar, 19h30', place: 'Sala de Estudos', status: 'Confirmado' },
  { id: 2, title: 'Estudo de Disciplina Espiritual', date: '02 Abr, 20h00', place: 'Auditório', status: 'Aberto' },
  { id: 3, title: 'Noite de Oração e Adoração', date: '09 Abr, 18h45', place: 'Plenário', status: 'Próximo' },
] as const;

export const profile = {
  name: 'Ana Souza',
  service: 'Discípula da ECC',
  role: 'Participante',
  church: 'Comunidade Cristã Esperança',
  since: 'Desde janeiro de 2024',
};
