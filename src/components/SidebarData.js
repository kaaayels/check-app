import React from 'react'
import { BsCalendar3Event } from 'react-icons/bs';
import { ImListNumbered } from 'react-icons/im';
import { FaMedal } from 'react-icons/fa';


export const SidebarData = [
  {
    title: "EVENTS",
    icon: <BsCalendar3Event/>,
    link: "/events",
  },
 
  {
    title: "STANDINGS",
    icon: <ImListNumbered/>,
    link: "/standings",
  },

  {
    title: "LEADERBOARDS",
    icon: <FaMedal/>,
    link: "/leaderboards",
  },
];