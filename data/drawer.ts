import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

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
    }
];

export default menu;