import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Analytical',
    iconName: 'chart-pie-2',
    route: '/dashboards/dashboard1',
  },
  {
    displayName: 'eCommerce',
    iconName: 'basket',
    route: '/dashboards/dashboard2',
  },
  {
    displayName: 'Modern',
    iconName: 'inbox',
    route: '/dashboards/dashboard3',
  },
  {
    navCap: 'Flexy Gare',
  },
  {
    displayName: 'Dashboard',
    iconName: 'message-2',
    route: 'dashboards  ',
  },
  {
    displayName: 'Calendario',
    iconName: 'calendar-event',
    route: 'theme-pages',
  },
  {
    displayName: 'Preparazione Gare',
    iconName: 'chart-donut-3',
    route: 'dashboards',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'tables',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'components',
      },
    ],
  },
  {
    displayName: 'Appalti Aggiudicati',
    iconName: 'phone',
    route: 'starter',
  },
  {
    displayName: 'Operai',
    iconName: 'chart-donut-3',
    route: 'ui-',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'forms',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'widgets',
      },
    ],
  },
  {
    displayName: 'Imprese Appaltanti',
    iconName: 'chart-donut-3',
    route: 'apps/mezzi',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'apps/mezzi/elenco',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'apps/mezzi/nuovo',
      },
    ],
  },
  {
    displayName: 'Imprese Appaltanti',
    iconName: 'chart-donut-3',
    route: 'apps/imprese_appaltanti',
    children: [
      {
        displayName: 'Elenco',
        iconName: 'point',
        route: 'apps/imprese_appaltanti/elenco',
      },
      {
        displayName: 'Nuovo',
        iconName: 'point',
        route: 'apps/imprese_appaltanti/nuovo',
      },
    ],
  },
  {
    displayName: 'Impostazioni',
    iconName: 'note',
    route: 'tables',
  },
];
