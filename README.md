# Professional Portfolio & CV Web App

A modern, responsive, and feature-rich portfolio application built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**. This project is designed to showcase your skills, experience, education, and projects in a professional manner.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and glassmorphism effects.
- **Dark Mode**: Fully supported dark theme with a toggle switch.
- **Responsive Design**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Dynamic Content**: All content is managed via a single `mockData.ts` file for easy updates.
- **Portfolio Details**: Dedicated detail pages for each project with Markdown support for rich descriptions.
- **Edit Mode**: Inline editing capability for quick content updates (stored locally).
- **PDF Download**: Feature to download the CV as a PDF.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Iconify](https://iconify.design/)
- **Theming**: `next-themes`
- **Markdown**: `marked` for rendering project descriptions.

## 📂 Project Structure

```
.
├── package/                # Main application source code
│   ├── src/
│   │   ├── app/            # Next.js App Router pages
│   │   ├── components/     # Reusable UI components
│   │   ├── services/       # Data services (mockData.ts)
│   │   └── ...
│   └── ...
├── package.json            # Root script shortcuts
└── README.md               # Project documentation
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/ruly13/portofolio.git
    cd portofolio
    ```

2.  Install dependencies:
    ```bash
    npm install --prefix package
    # or simply run from root if scripts are set up
    npm install
    ```

### Running Locally

You can run the development server directly from the root directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

## 📝 Customization

### Updating Content

Navigate to `package/src/services/mockData.ts`. Here you can update:

- **Hero**: Name, title, description, social links.
- **Experience**: Work history.
- **Education**: Academic background.
- **Skills**: List of technical skills.
- **Portfolio**: Project details, images, and markdown descriptions.

### Adding a New Project

In `mockData.ts`, add a new object to the `portfolio` array:

```typescript
{
  id: 4,
  title: "My New Project",
  slug: "my-new-project", // Unique ID for the URL
  image: "/images/portfolio/project.png",
  info: "Short summary...",
  description: `
    ## Overview
    Detailed description using Markdown...
  `,
  technologies: ["React", "Node.js"],
  liveUrl: "https://...",
  githubUrl: "https://..."
}
```

## 📄 License

This project is licensed under the MIT License.
