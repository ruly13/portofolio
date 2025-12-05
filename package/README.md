# Professional CV Web App

This is a modern, responsive CV/Portfolio web application built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices (Mobile, Tablet, Desktop).
- **Modern Aesthetics**: Clean, professional UI with smooth animations.
- **Editable Content**: Easy to update content via `mockData.ts` or inline editing mode.
- **Sections**:
  - Hero (Introduction)
  - Experience (Timeline)
  - Education (Cards)
  - Portfolio (Grid)
  - Skills (Progress bars - _if enabled_)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd package
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Customization

- **Data**: Update `src/services/mockData.ts` with your personal information.
- **Styles**: Modify `src/app/globals.css` to change the color theme or typography.
- **Images**: Place your images in the `public/images` directory.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Iconify](https://iconify.design/)

## License

MIT
