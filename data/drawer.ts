import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';

const menu: any = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        Icon: DashboardIcon
    },
    {
        name: 'Clienti',
        href: '/customer',
        Icon: PeopleIcon,
        items: [
            {
                name: 'Lista Clienti',
                href: '/customers'
            },
            {
                name: 'Aggiungi Cliente',
                href: '/customers/add-new'
            }
        ]
    },
    {
        name: 'Abbonamenti',
        href: '/dashboard',
        Icon: AssignmentIcon,
        items: [
            {
                name: 'Abbonamenti/Corsi',
            },
            {
                name: 'Promozioni'
            }
        ]
    },
    {
        name: 'Statitiche',
        href: '/dashboard',
        Icon: QueryStatsIcon
    },
    {
        name: 'Contabilità',
        href: '/dashboard',
        Icon: MonetizationOnIcon,
        items: [
            {
                name: 'Prima Nota',
            },
            {
                name: 'Pagamenti In Sospeso'
            }
        ]
    },
    {
        name: 'Dipendenti',
        href: '/dashboard',
        Icon: PeopleIcon,
        items: [
            {
                name: 'Attivi',
            },
            {
                name: 'Nuovo Dipendente'
            },
            {
                name: 'Riepilogo',
            },
            {
                name: 'Gestione'
            }
        ]
    },
    {
        name: 'Calendario',
        href: '/dashboard',
        Icon: ScheduleIcon
    },
    {
        name: 'Report',
        href: '/dashboard',
        Icon: AssessmentIcon
    },
    {
        name: 'Utenti',
        href: '/dashboard',
        Icon: PersonIcon,
        items: [
            {
                name: 'Lista Utenti',
            },
            {
                name: 'Attività'
            }
        ]
    },
];

export default menu;