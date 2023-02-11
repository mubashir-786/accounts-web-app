import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { CUSTOMER_ADD_URL, CUSTOMER_LIST_URL, ROOT_URL } from 'routes';

export const MENU = [
  {
    href: ROOT_URL,
    icon: <SignalCellularAlt2BarIcon />,
    title: 'Dashboard',
  },
  {
    title: 'Customer',
    list: [
      {
        href: CUSTOMER_ADD_URL,
        icon: <AddIcon />,
        title: 'Add',
      },
      {
        href: CUSTOMER_LIST_URL,
        icon: <ListAltIcon />,
        title: 'list',
      },
    ],
  },
  {
    title: 'Vender',
    list: [
      {
        href: CUSTOMER_LIST_URL,
        icon: <AddIcon />,
        title: 'Add',
      },
      {
        href: CUSTOMER_LIST_URL,
        icon: <ListAltIcon />,
        title: 'list',
      },
    ],
  },
  {
    title: 'Product',
    list: [
      {
        href: CUSTOMER_LIST_URL,
        icon: <AddIcon />,
        title: 'Add',
      },
      {
        href: CUSTOMER_LIST_URL,
        icon: <ListAltIcon />,
        title: 'list',
      },
      {
        href: CUSTOMER_LIST_URL,
        icon: <ListAltIcon />,
        title: 'Mapping',
      },
    ],
  },
  // {
  //   href: CUSTOMER_QUERIES_URL,
  //   icon: <QueryStatsIcon />,
  //   title: 'Add',
  // },
];
