import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/',
        icon: <BsIcons.BsFillPersonFill />,
        cName: 'nav-text'
    },
    {
        title: 'Play',
        path: '/',
        icon: <BsIcons.BsFillPlayFill />,
        cName: 'nav-text'
    },
    {
        title: 'Options',
        path: '/',
        icon: <IoIcons.IoIosOptions />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/',
        icon: <AiIcons.AiOutlineQuestionCircle />,
        cName: 'nav-text'
    }
]   