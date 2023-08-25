import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'dashboard',
  },
  {
    displayName: 'Calendario',
    iconName: 'calendar-event',
    route: 'calendario',
  },
  {
    displayName: 'Preparazione Gare',
    iconName: 'loader',
    route: 'gare_elenco',
  },
  {
    displayName: 'Appalti Aggiudicati',
    iconName: 'checks',
    route: 'appalti',
  },
  {
    displayName: 'Operai',
    iconName: 'users',
    route: 'operai_elenco',
  },
  {
    displayName: 'Mezzi',
    iconName: 'car',
    route: 'mezzi_elenco',
  },
  {
    displayName: 'Imprese Appaltanti',
    iconName: 'building-factory-2',
    route: 'imprese_elenco',
  },
  {
    displayName: 'Impostazioni',
    iconName: 'tool',
    route: 'impostazioni',
  },
];
