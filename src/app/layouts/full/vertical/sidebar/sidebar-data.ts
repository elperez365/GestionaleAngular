import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'message-2',
    route: 'dashboard',
  },
  {
    displayName: 'Calendario',
    iconName: 'calendar-event',
    route: 'calendario',
  },
  {
    displayName: 'Preparazione Gare',
    iconName: 'chart-donut-3',
    route: 'gare_elenco',
    
  },
  {
    displayName: 'Appalti Aggiudicati',
    iconName: 'phone',
    route: 'appalti',
  },
  {
    displayName: 'Operai',
    iconName: 'chart-donut-3',
    route: 'operai_elenco',
    
  },
  {
    displayName: 'Mezzi',
    iconName: 'chart-donut-3',
    route: 'mezzi_elenco',
    
  },
  {
    displayName: 'Imprese Appaltanti',
    iconName: 'chart-donut-3',
    route: 'imprese',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'imprese_elenco',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'imprese_nuovo',
      },
    ],
  },
  {
    displayName: 'Impostazioni',
    iconName: 'note',
    route: 'impostazioni',
  },
];
