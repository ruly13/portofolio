export const resumeData = {
  hero: {
    name: "Rohmat choiruly anwar",
    title: "Developer",
    description: "Passionate developer with <1 years of experience in building scalable web applications. Dedicated to writing clean, efficient code and solving complex problems.",
    image: "/images/foto/1.jpg",
    contact: {
      phone: "+6285335660159",
      email: "rohmatchoirulyanwar@gmail.com",
      location: "Madiun, Indonesia"
    }
  },
  experience: [
    {
      id: 1,
      role: "Internship Web Fullstack Developer",
      company: "PT ELECOMP INDONESIA.",
      period: "6 Bulan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Creative Agency",
      period: "2019 - 2021",
      description: "Developed responsive websites and e-commerce platforms for various clients using modern web technologies."
    }
  ],
  education: [
    {
      id: 1,
      degree: "Politeknik negeri madiun",
      institution: "Teknik Informatika",
      period: "2022 - 2025"
    },
    {
      id: 2,
      degree: "SMK Negeri 1 Madiun",
      institution: "",
      period: "2018 - 2021"
    }
  ],
  skills: [
    "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Git", "AWS"
  ],
  portfolio: [
    {
      id: 1,
      image: '/images/portfolio/cozycasa.png',
      alt: 'Project 1',
      title: 'E-Commerce Platform',
      slug: 'e-commerce-platform',
      info: 'A full-featured online store built with Next.js and Stripe.',
      description: `
        ## Overview
        This project is a comprehensive e-commerce solution designed to provide a seamless shopping experience. It features a modern, responsive user interface, secure payment processing, and a robust admin dashboard for inventory management.

        ## Key Features
        - **User Authentication**: Secure login and registration using NextAuth.js.
        - **Product Catalog**: Dynamic product listing with filtering and search capabilities.
        - **Shopping Cart**: Real-time cart management with persistent state.
        - **Payment Gateway**: Integrated Stripe for secure credit card transactions.
        - **Order Tracking**: Users can view their order history and status.

        ## Challenges & Solutions
        One of the main challenges was handling real-time inventory updates. I implemented a webhook system with Stripe and a custom database trigger to ensure stock levels are always accurate.
      `,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
      liveUrl: "https://google.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      image: '/images/portfolio/humans.png',
      alt: 'Project 2',
      title: 'Social Media Dashboard',
      slug: 'social-media-dashboard',
      info: 'Analytics dashboard for tracking social media performance.',
      description: `
        ## Overview
        A centralized dashboard for social media managers to track key performance metrics across multiple platforms.

        ## Key Features
        - **Data Visualization**: Interactive charts and graphs using Recharts.
        - **Multi-platform Integration**: Connects with Twitter, LinkedIn, and Instagram APIs.
        - **Report Generation**: Automated PDF reports for stakeholders.
      `,
      technologies: ["React", "Redux", "Recharts", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      image: '/images/portfolio/roket-squred.png',
      alt: 'Project 3',
      title: 'Task Management App',
      slug: 'task-management-app',
      info: 'Productivity tool for teams to manage tasks and projects.',
      description: `
        ## Overview
        A collaborative task management tool inspired by Trello and Asana, designed to improve team productivity.

        ## Key Features
        - **Drag & Drop Interface**: Intuitive Kanban board for task management.
        - **Real-time Collaboration**: Live updates using WebSockets.
        - **Team Management**: Role-based access control and team workspaces.
      `,
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
  ],
  certificates: [
    {
      id: 1,
      image: '/images/portfolio/cozycasa.png',
      alt: 'React Certificate',
      title: 'Advanced React Patterns',
      slug: 'react-certificate',
      info: 'Certificate for completing advanced React patterns course.',
      description: '',
      technologies: [],
      liveUrl: "",
      githubUrl: ""
    },
    {
      id: 2,
      image: '/images/portfolio/humans.png',
      alt: 'AWS Certificate',
      title: 'AWS Certified Solutions Architect',
      slug: 'aws-certificate',
      info: 'Professional certification for AWS architecture.',
      description: '',
      technologies: [],
      liveUrl: "",
      githubUrl: ""
    },
    {
      id: 3,
      image: '/images/portfolio/roket-squred.png',
      alt: 'TypeScript Certificate',
      title: 'TypeScript Mastery',
      slug: 'typescript-certificate',
      info: 'Master class for TypeScript development.',
      description: '',
      technologies: [],
      liveUrl: "",
      githubUrl: ""
    }
  ]
};

