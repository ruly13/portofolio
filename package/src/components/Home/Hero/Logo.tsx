import Link from 'next/link';

const Logo: React.FC = () => {
    return (
        <Link href="/" className="block group">
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Rohmat <span className="text-blue-600 dark:text-blue-400">Choiruly Anwar</span>
            </h1>
        </Link>
    );
};

export default Logo;