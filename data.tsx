import { BookText, Briefcase, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench,Expand } from "lucide-react";


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
        title: "skills",
        icon: <Expand size={20} />,
        link: "#experience",
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 5,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 6,
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

export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  👨🏻‍💼",
        experience: [
            {
                name: "HTML",
                subtitle: "Experienced",
                value: 85,
            },
            {
                name: "CSS, SASS(SCSS)",
                subtitle: "Experienced",
                value: 85,
            },
            {
                name: "JavaScript",
                subtitle: "Intermediate",
                value: 75,
            },
            {
                name: "jQuery",
                subtitle: "Intermediate",
                value: 70,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Experienced",
                value: 85,
            },
            {
                name: "Bootstrap",
                subtitle: "Intermediate",
                value: 70,
            },
            {
                name: "Matreal UI",
                subtitle: "Intermediate",
                value: 70,
            },
            {
                name: "React",
                subtitle: "Experienced",
                value: 90,
            },
            {
                name: "Redux",
                subtitle: "Experienced",
                value: 80,
            },
            {
                name: "Next JS",
                subtitle: "Intermediate",
                value: 85,
            },
            {
                name: "Type Script",
                subtitle: "Intermediate",
                value: 75,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Intermediate",
                value: 75,
            },
            {
                name: "Express JS",
                subtitle: "Intermediate",
                value: 80,
            },
            {
                name: "Mongo DB",
                subtitle: "Intermediate",
                value: 80,
            },
            {
                name: "Firebase",
                subtitle: "Intermediate",
                value: 80,
            },
            {
                name: "Prisma",
                subtitle: "Intermediate",
                value: 80,
            },
            {
                name: "MySQL",
                subtitle: "Basic",
                value: 60,
            },
        ],
    },
]

export const dataServices = [
    {
        id: 1,
        title: "Web development",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Custom Website Development",
            },
            {
                name: "Responsive design and development",
            },
            {
                name: "SEO Optimization",
            },
            {
                name: "Veb proqramların inkişafı",
            },
            {
                name: "E-commerce Website",
            },
            {
                name: "Ongoing maintenance and support",
            },
        ],
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Foody e-commerce website",
        image: "/portfolio-1.png",
        urlGithub: "https://github.com/bayramovmurad/foodyApp",
        urlDemo: "https://foody-ten-mu.vercel.app/",
    },
    {
        id: 2,
        title: "Realtime Chat App",
        image: "/portfolio-2.png",
        urlGithub: "https://github.com/bayramovmurad/realtimeChatApp-mernstack",
        urlDemo: "https://realtimechatapp-mernstack.onrender.com/",
    },
    {
        id: 3,
        title: "Post App",
        image: "/portfolio-3.png",
        urlGithub: "https://github.com/bayramovmurad/post-app-React",
        urlDemo: "post-app-gamma.vercel.app",
    },

];

export const dataContact = [
    {
        id: 1,
        title: "Phone",
        subtitle: "+994503324844",
        link: "tel:+994503324844",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/bayramovmurad",
        link: "github.com/bayramovmurad",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "email@email.com",
        link: "mbayramov340@gmail.com",
        icon: <Inbox />,
    },
];