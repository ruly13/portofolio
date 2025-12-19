import { PortfolioItem } from "@/types/resume";

export const portfolioDataEn: PortfolioItem[] = [
  {
    id: 1,
    image: '/images/portfolio/heatwafe.png',
    alt: 'Project 1',
    title: 'HeatWafe-Project',
    slug: 'heatwafe-project',
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
  }
];

export const portfolioDataId: PortfolioItem[] = [
  {
    id: 1,
    image: '/images/portfolio/heatwafe.png',
    alt: 'Proyek 1',
    title: 'HeatWafe-Project',
    slug: 'heatwafe-project',
    info: 'Toko online lengkap yang dibangun dengan Next.js dan Stripe.',
    description: `
      ## Ikhtisar
      Proyek ini adalah solusi e-commerce komprehensif yang dirancang untuk memberikan pengalaman berbelanja yang mulus. Ini menampilkan antarmuka pengguna responsif modern, pemrosesan pembayaran yang aman, dan dasbor admin yang kuat untuk manajemen inventaris.

      ## Fitur Utama
      - **Otentikasi Pengguna**: Login dan pendaftaran aman menggunakan NextAuth.js.
      - **Katalog Produk**: Daftar produk dinamis dengan kemampuan filter dan pencarian.
      - **Keranjang Belanja**: Manajemen keranjang waktu nyata dengan state persisten.
      - **Gerbang Pembayaran**: Stripe terintegrasi untuk transaksi kartu kredit yang aman.
      - **Pelacakan Pesanan**: Pengguna dapat melihat riwayat dan status pesanan mereka.

      ## Tantangan & Solusi
      Salah satu tantangan utama adalah menangani pembaruan inventaris waktu nyata. Saya menerapkan sistem webhook dengan Stripe dan pemicu basis data khusus untuk memastikan tingkat stok selalu akurat.
    `,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    liveUrl: "https://google.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    image: '/images/portfolio/humans.png',
    alt: 'Proyek 2',
    title: 'Dasbor Media Sosial',
    slug: 'social-media-dashboard',
    info: 'Dasbor analitik untuk melacak kinerja media sosial.',
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
    githubUrl: "#"
  },
  {
    id: 3,
    image: '/images/portfolio/roket-squred.png',
    alt: 'Proyek 3',
    title: 'Aplikasi Manajemen Tugas',
    slug: 'task-management-app',
    info: 'Alat produktivitas bagi tim untuk mengelola tugas dan proyek.',
    description: `
      ## Ikhtisar
      Alat manajemen tugas kolaboratif yang terinspirasi oleh Trello dan Asana, dirancang untuk meningkatkan produktivitas tim.

      ## Fitur Utama
      - **Antarmuka Drag & Drop**: Papan Kanban intuitif untuk manajemen tugas.
      - **Kolaborasi Waktu Nyata**: Pembaruan langsung menggunakan WebSockets.
      - **Manajemen Tim**: Kontrol akses berbasis peran dan ruang kerja tim.
    `,
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
