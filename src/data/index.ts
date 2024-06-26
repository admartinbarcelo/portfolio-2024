export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Client collaboration is my priority, ensuring open and effective communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Hackshow.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Next.js Eccomerce site.",
    description: "Behind the scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projectItems = [
  {
    id: 1,
    title: 'Hands Up - Meet new people',
    description: 'A web application designed for travelers. It offers the ability to get full travel packages and meet new people.',
    img: '/Project-1.webp',
    iconLists: ["/re.svg", "/bootstrap.svg", "/node.svg", "/mdb.svg"],
    link: 'https://handsup-project.netlify.app/',
    hrefRepository: 'https://github.com/admartinbarcelo/HandsUp-Client'

  },
  {
    id: 2,
    title: 'EvoGym - Evolutionary fitness',
    description: 'A website designed to recreate a fitness-oriented business with a modern look. ',
    img: '/Project-2.webp',
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg",],
    link: 'https://gymsite-typescript.netlify.app/',
    hrefRepository: 'https://github.com/admartinbarcelo/Typescript-APP'

  },
  {
    id: 3,
    title: 'Brekkie - Brunch & Coffee',
    description: 'A website designed to recreate a brunch and coffee shop with a modern look for practice BEM methodology.',
    img: '/Project-3.webp',
    iconLists: ["/re.svg", "/css.svg"],
    link: 'https://brekkie.netlify.app/',
    hrefRepository: 'https://github.com/admartinbarcelo/Rest-Practice-BEM-CSS'
  },
  {
    id: 4,
    title: 'Porfolio - v1',
    description: 'The first version of my portfolio, designed to showcase my skills and projects.',
    img: '/first-portfolio.webp',
    iconLists: ["/re.svg", "/css.svg"],
    link: 'https://admartinbarcelo.netlify.app/',
    hrefRepository: 'https://github.com/admartinbarcelo/portfolio-admartinbarcelo'
  },
  {
    id: 5,
    title: 'Clippy - The Clipboard',
    description: 'A website designed to create an app that allows users to make questions of their code problems.',
    img: '/Project-5.webp',
    iconLists: ["/javascript.svg", "/html5.svg", "/bootstrap.svg", "/node.svg", "/mdb.svg"],
    link: 'https://clippy1.fly.dev/',
    hrefRepository: 'https://github.com/admartinbarcelo/Clippy'
  },
  {
    id: 6,
    title: 'DragonBall - Doodle Jump',
    description: 'Game developed with JavaScript (ES6), HTML5, CANVAS and CSS3 technology.',
    img: '/Project-4.webp',
    iconLists: ["/javascript.svg", "/html5.svg", "/css.svg"],
    link: 'https://dragon-doodle.netlify.app/',
    hrefRepository: 'https://github.com/admartinbarcelo/dragonBall-Jump'
  },
]

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/admartinbarcelo",
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/admartinbarcelo/",
  },
  {
    id: 3,
    img: "/insta.svg",
    href: "https://www.instagram.com/im_adrianmartin/",
  },
];

export const experienceItems = [
  {
    id: 1,
    title: 'Frontend Software Engineer',
    description: 'I work on transitions, maintenance, and the development of new applications and functionalities.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Freelance Full-Stack Developer',
    description: 'I work on the development of new applications and functionalities, as well as the maintenance of existing applications',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Full-Stack Developer ',
    description: 'Completed a 9-week intensive program covering full-stack web development with the MERN stack at a top 3 globally ranked tech school ',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
];
