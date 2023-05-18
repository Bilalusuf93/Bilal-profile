import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React/Next.Js Developer",
    icon: mobile,
  },
  {
    title: "Backend (Node.Js, .Net) Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full stack Developer | NextJs, ReactJs, NodeJs, MongoDb, Tealium, Edgio",
    company_name: "visionet | Systems Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Fab 2021 - Current",
    points: [
      "Developing and maintaining web applications using React.js, NextJs, NodeJs and other related technologies.",
      "Working in conjunction with diverse teams comprising designers, product managers, and fellow developers to craft exceptional products of superior quality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Engaging in code reviews with an astute eye and offering constructive feedback to fellow developers, thus contributing to a culture of continuous improvement.",
      "Comprehending the needs and specifications of products and formulating solution designs with precision and accuracy."
    ],
  },
  {
    title: "React.Js Dynamic Commerce 365 Customization",
    company_name: "Delcit | SGI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Customize MS dynamic 365 commerce product as per SGI requirments.",
      "Collaborating with cross-functional teams including designers, product managers, client, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Web Developer | ReactJs, Boostrap, Jquery, Asp.Net, Asp.Net Core",
    company_name: "Sydney Forex",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js, NodeJS, Asp.Net, Jquery and other related technologies.",
      "Leading the team of atleast 5 poeple and assigning them day to day tasks by understanding the requirments and wrting solution designs",
      "Implementing responsive design and ensuring cross-browser compatibility of their existence project which intitially was not mobile friendly.",
      "Revamp their existance prject from Asp.Net to ReactJs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Kalsoft | QDS (Qatar, Doha)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - 2019",
    points: [
      "Developing and maintaining web applications using Asp.Net and Database in MSSQL Server.",
      "Collaborating with cross-functional teams including designers, product lead, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Engineer",
    company_name: "Softronics",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - 2019",
    points: [
      "Developing and maintaining web applications using Asp.Net and Database in MSSQL Server.",
      "Collaborating with cross-functional teams including designers, product lead, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Surmawala",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - 2019",
    points: [
      "Developing and maintaining Desktop applications using windows form and also developed asset tracking and attendence managment system using Asp.Net Webforms, database in MSSQL Server.",
      "Collaborating with cross-functional teams including designers, product lead, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "women/6.jpg",
  },
];

const projects = [
  {
    name: "Mattressfirm",
    description:
      "E-commerce web application, where users can select best possible matched mattresses, pillows and other related items, NextJS and React is the frontend library, backend APIs consumed using nextjs builtin support for wrting APIs for SSR functionality",
    roleFeatures: [
      "Unbxd & other 3rd party integration",
      "Caching implementation for performance",
      "I am fully involved in development of PLP, PDP and Home page",
      "Tealium integration for tracking",
      "Edgio with Next.Js"
    ],
    tags: [
      {
        name: "NextJS",
        color: "purple-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux, ContextAPI",
        color: "badge-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Saas",
        color: "pink-text-gradient",
      },
      {
        name: "Optimizely",
        color: "yellow-text-gradient",
      },
      {
        name: "Tealium",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.mattressfirm.com/",
    source_website_link: "https://www.mattressfirm.com/",
  },
  {
    name: "Delcit | SGI",
    description:
      "E-commerce web application mainly uses for books, CDs business, built using Dynamic365 Commerce platform which is built over core React.",
      roleFeatures: [
        "Implemnted new feature on Home, PLP, PDP and cart page",
        "Dynamic commerce dataAction customization",
      ],
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "dynamic commerce365",
        color: "purple-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://bookstore.sgi-usa.org/",
    source_website_link: "https://bookstore.sgi-usa.org/",
  },
  {
    name: "SydneyForex Ltd",
    description:
      "Remmitance web application is a platform using that users can send money to their loved ones from different countries, I have revamped that application in ReactJs and Nodejs, previously it was in Asp.Net",
      roleFeatures: [
        "OCR, reading text from picture and validate documents",
        "Our team fully revamp the project from Asp.Net to ReactJs",
        "Modify the database structure to make it fully relational",
        "Also involved in writing SQL complex queries",
        "Apply the theme and UI design using bootstrap"
      ],
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
      {
        name: "OCR",
        color: "white-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Human Resource Management Software",
    description:
      "People.Partners is a comprehensive HR and payroll software solution designed to automate and simplify all aspects of HR management. With customizable features and integrations, People.Partners offers a seamless and efficient HR management experience, allowing you to focus on growing your business. It was built using Asp.net webforms and database MSSQL server, I was participated in couple of modules like Recruitment, Leave & Attendance and Assigned Assets ",
      roleFeatures: [
        "Developing new modules for example Recruitment, Leave & Attendance and Assigned Assets",
        "Also developed various HTML reports",
        "Also involved in writing SQL complex queries and stored procedure",
        "Apply the theme and UI design using bootstrap"
      ],
      tags: [
      {
        name: "Asp.Net",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL Server",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "white-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Qatar News Agency (Doha, Qatar)",
    description:
      "It is Qatar news agency video streaming website which gives access to user for watching various live broad casting TV channels and also VOD video on demand based on provided dates & time, I was builts this stand alone in Asp.Net and used SQL Server as a Databse for authentication and authorization.",
      roleFeatures: [
        "Developed complete video streaming website using Asp.net",
        "Entity Framwork",
        "VOD (Video on deman)",
        "Apply the theme and UI design using bootstrap"
      ],
      tags: [
      {
        name: "Asp.Net",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL Server",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "white-text-gradient",
      },
      {
        name: "JwPlayer",
        color: "purple-text-gradient",
      },
      {
        name: "wowza server",
        color: "yellow-text-gradient",
      },
      {
        name: "Entity framework",
        color: "badge-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Document managment system (Doha, Qatar)",
    description:
      "This was a document management system using Dot Net Technologies; C#.Net, ASP.Net and Telerik Controls. This system was developed for the Whole Qatar School users to read, scan and upload all types of documents to the centralized system of the Education Ministry. The project was very critical due to the nature of users. It also integrated with Dynamsoft scaning components",
      roleFeatures: [
        "Give support to existence web application",
        "C#, .Net",
        "Telerik",
        "Dynamsoft Scanning"
      ],
      tags: [
      {
        name: "Asp.Net",
        color: "blue-text-gradient",
      },
      {
        name: "Oracle",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
