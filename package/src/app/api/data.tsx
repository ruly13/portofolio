export const count = [
    {
        icon: "/images/counter/star.svg",
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: "/images/counter/admin.svg",
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: "/images/counter/bag.svg",
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Skills = [
  {
    category: "Technical Skills",
    data: [
      {
        title: "Bahasa Pemrograman",
        skills: [
          { name: "PHP", icon: "logos:php", level: "Intermediate" },
          { name: "Python", icon: "logos:python", level: "Intermediate" },
          { name: "JavaScript", icon: "logos:javascript", level: "Advanced" },
          { name: "HTML", icon: "logos:html-5", level: "Advanced" },
          { name: "CSS", icon: "logos:css-3", level: "Advanced" },
          { name: "TypeScript", icon: "logos:typescript-icon", level: "Intermediate" },
          { name: "Kotlin", icon: "logos:kotlin-icon", level: "Basic" },
        ]
      },
      {
        title: "Framework & Library",
        skills: [
           { name: "Next.js 15", icon: "logos:nextjs-icon", level: "Advanced" },
           { name: "React 19", icon: "logos:react", level: "Advanced" },
           { name: "TailwindCSS", icon: "logos:tailwindcss-icon", level: "Advanced" },
           { name: "Zustand", icon: "logos:react", level: "Intermediate" },
           { name: "CodeIgniter", icon: "logos:codeigniter-icon", level: "Intermediate" },
           { name: "Bootstrap", icon: "logos:bootstrap", level: "Advanced" },
        ]
      },
      {
        title: "Database",
        skills: [
          { name: "MySQL", icon: "logos:mysql", level: "Intermediate" },
          { name: "Firebase", icon: "logos:firebase", level: "Intermediate" },
        ]
      },
       {
        title: "Tools & Platform",
        skills: [
          { name: "Git", icon: "logos:git-icon", level: "Advanced" },
          { name: "GitHub", icon: "logos:github-icon", level: "Advanced" },
          { name: "Docker", icon: "logos:docker-icon", level: "Basic" },
          { name: "VS Code (+AI)", icon: "logos:visual-studio-code", level: "Advanced" },
          { name: "Postman", icon: "logos:postman-icon", level: "Intermediate" },
           { name: "Turbo Monorepo", icon: "logos:turborepo-icon", level: "Basic" },
        ]
      },
      {
        title: "IoT & Hardware",
        skills: [
           { name: "ESP32", icon: "simple-icons:espressif", level: "Intermediate" },
           { name: "Arduino", icon: "logos:arduino", level: "Intermediate" },
           { name: "Sensor DHT22", icon: "heroicons:cpu-chip", level: "Intermediate" },
           { name: "Relay", icon: "heroicons:bolt", level: "Intermediate" },
           { name: "Raspberry Pi", icon: "logos:raspberry-pi", level: "Basic" },
        ]
      },
      {
        title: "Microsoft",
        skills: [
           { name: "Word", icon: "logos:microsoft-word", level: "Advanced" },
           { name: "Excel", icon: "logos:microsoft-excel", level: "Advanced" },
        ]
      }
    ]
  },
  {
    category: "Soft Skills",
    data: [
       {
         title: "Non Teknis",
         skills: [
            { name: "Pemecahan Masalah", icon: "heroicons:puzzle-piece", level: "Advanced" },
            { name: "Kerja Sama Tim", icon: "heroicons:users", level: "Advanced" },
            { name: "Manajemen Waktu", icon: "heroicons:clock", level: "Intermediate" },
            { name: "Komunikasi Efektif", icon: "heroicons:chat-bubble-left-right", level: "Advanced" },
            { name: "Adaptabilitas (AI)", icon: "heroicons:sparkles", level: "Advanced" },
            { name: "Ketelitian", icon: "heroicons:magnifying-glass", level: "Advanced" },
         ]
       }
    ]
  }
];

export const Progress = []; // Kept for backward compatibility if needed, but empty now.

export const Servicebox = [
    {
        title: 'Amazon',
        logo: '/images/companies/amazon.png',
        joindate: "5/2025",
        leavedate: "Present",
        description: 'Full Stack Developer working on AWS cloud infrastructure. Developed serverless applications using Lambda and API Gateway. Implemented automated testing and deployment strategies.',
        present: true,
    },
    {
        title: 'Microsoft',
        logo: '/images/companies/microsoft.png',
        joindate: "5/2023",
        leavedate: "4/2025",
        description: 'Senior Full Stack Developer responsible for building enterprise-level applications using .NET Core and Angular. Optimized database performance and implemented security best practices.',
        present: false,
    },
    {
        title: 'Google',
        logo: '/images/companies/google.png',
        joindate: "4/2021",
        leavedate: "5/2023",
        description: 'Led development of cloud-based applications using React and Node.js. Implemented CI/CD pipelines and microservices architecture. Collaborated with cross-functional teams to deliver scalable solutions.',
        present: false,
    },
]

export const portfolioinfo = [
    {
        image: '/images/portfolio/cozycasa.png',
        alt: 'Portfolio',
        title: 'Github Project',
        slug: '#',
        info: 'Project Link',
    },
    {
        image: '/images/portfolio/humans.png',
        alt: 'Portfolio',
        title: 'Everyday Humans',
        slug: '#',
        info: 'Designation',
    },
    {
        image: '/images/portfolio/roket-squred.png',
        alt: 'Portfolio',
        title: 'Rocket Squared',
        slug: '#',
        info: 'Designation',
    },
]

export const educationinfo = [
    {
        Uni: 'Massachusetts Institute of Technology',
        course: "Bachelor of Computer Applications",
        year: "2023",
    },
    {
        Uni: 'St. Xavier`s Junior College',
        course: "Higher Secondary Education",
        year: "2021",
    },
    {
        Uni: 'St. Mary`s High School',
        course: "Secondary School Certificate",
        year: "2019",
    },
]

export const heroinfo = {
    title: "John Doe",
    subtitle: "Software Developer",
    description: "I am a passionate software developer dedicated to continuous learning and professional growth, striving to become an exceptional developer.",
    image: "/images/hero/hero-image.png",
    phone: "+323-25-8964",
    email: "templatesnextjs@gmail.com",
    location: "Ahmedabaad, India"
}