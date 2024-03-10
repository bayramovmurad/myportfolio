import { BookText, Briefcase, CodeSquare, Home, Mail, UserRound, UsersRound, Wrench } from "lucide-react";


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataAboutMe = [
    {
        id: 1,
        name: "Experience",
        icon: <Briefcase />,
        description: "+2 years of experience",
    },
    {
        id: 2,
        name: "Customers",
        icon: <UsersRound />,
        description: "+5 satisfied customers",
    },
    {
        id: 3,
        name: "Projects",
        icon: <Wrench />,
        description: "+10 completed",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
]