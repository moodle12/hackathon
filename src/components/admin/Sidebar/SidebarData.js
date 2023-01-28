import React from 'react';
// import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';



export const SidebarData = [
  // {
  //   title: {logo},
  //   path: '/',
  //   icon: <AiIcons.AiFillHome />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    id:'one'
  },
  {
    title: 'Manage Users',
    path: '/admin/manageusers',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text',
    id:'two'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon:<AiIcons.AiFillSetting />,
    cName: 'nav-text',
    id:'three'
   }
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
