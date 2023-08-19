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
    route: 'gare',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'gare_elenco',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'gare_nuovo',
      },
    ],
  },
  {
    displayName: 'Appalti Aggiudicati',
    iconName: 'phone',
    route: 'appalti',
  },
  {
    displayName: 'Operai',
    iconName: 'chart-donut-3',
    route: 'operai',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'operai_elenco',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'operai_nuovo',
      },
    ],
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
