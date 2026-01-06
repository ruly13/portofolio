import { PortfolioItem } from "@/types/resume";

export const portfolioDataEn: PortfolioItem[] = [
  {
    id: 1,
    image: "/images/portfolio/heatwafe.png",
    alt: "Project 1",
    title: "HeatWafe-Project",
    slug: "heatwafe-project",
    info: "IoT-Based Rhizome Drying System",
    description: `Designed and built a functional smart drying oven for herbal medicine raw materials to facilitate the drying process.
    Designed and built hardware and software, such as an Android application for monitoring and control based on Kotlin and Firebase, to visualize temperature data in real-time and provide remote control to the user. Implemented automatic control logic on the device to maintain a stable temperature according to the set-point, which successfully reduced the potential for drying failure.`,
    technologies: ["Kotlin", "Firebase", "Android-studio"],
    liveUrl: "https://google.com",
    githubUrl: "https://github.com/ruly13/heatwafe_v1.1",
  },
  {
    id: 2,
    image: "/images/portfolio/guestbook-pro.svg",
    alt: "Project 2",
    title: "Digital Event Guestbook",
    slug: "digital-event-guestbook",
    info: "A digital guest recording system for events to simplify data collection.",
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
    githubUrl: "https://github.com/ruly13/guestbook-management-V1",
  },
  {
    id: 3,
    image: "/images/portfolio/roket-squred.png",
    alt: "Project 3",
    title: "Task Management App",
    slug: "task-management-app",
    info: "Productivity tool for teams to manage tasks and projects.",
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
    githubUrl: "#",
  },
];

export const portfolioDataId: PortfolioItem[] = [
  {
    id: 1,
    image: "/images/portfolio/heatwafe.png",
    alt: "Proyek 1",
    title: "HeatWafe-Project",
    slug: "heatwafe-project",
    info: "Sistem Pengering Rimpang Berbasis IoT",
    description: `Merancang dan membangun fungsional sebuah oven pengering pintar untuk bahan baku obat herbal guna
memudahkan pengeringan.
Merancang dan membangun perangkat keras dan perangkat lunak seperti aplikasi android untuk
monitoring dan kontrol berbasis kotlin dan firebase untuk visualisasi data suhu secara real-time dan
memberikan kontrol jarak jauh kepada pengguna. Mengimplementasikan logika kontrol otomatis
pada perangkat untuk menjaga suhu stabil sesuai set-point, yang berhasil mengurangi potensi
kegagalan pengeringan`,
    technologies: ["Kotlin", "Firebase", "Android-studio"],
    liveUrl: "https://google.com",
    githubUrl: "https://github.com/ruly13/heatwafe_v1.1",
  },
  {
    id: 2,
    image: "/images/portfolio/guestbook-pro.svg",
    alt: "Proyek 2",
    title: "Buku Tamu Digital",
    slug: "digital-event-guestbook",
    info: "Sebuah sistem pencatatan tamu undangan hajatan untuk mempermudah pencatatan.",
    description: `
      ## Ikhtisar
      Dasbor terpusat untuk manajer media sosial untuk melacak metrik kinerja utama di berbagai platform.

      ## Fitur Utama
      - **Visualisasi Data**: Grafik dan bagan interaktif menggunakan Recharts.
      - **Integrasi Multi-platform**: Terhubung dengan API Twitter, LinkedIn, dan Instagram.
      - **Pembuatan Laporan**: Laporan PDF otomatis untuk pemangku kepentingan.
    `,
    technologies: ["React", "Redux", "Recharts", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/ruly13/guestbook-management-V1",
  },
];
