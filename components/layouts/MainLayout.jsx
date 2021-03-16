import Head from '../generic/Head';
import Link from 'next/link';
import { MainPaths } from '../../enums/paths/main-paths';

const MainLayout = ({title, description, url, children}) => (
    <>
    <Head 
        title={title}
        description={description}
        url={url}
    />
    
    <div className="min-h-screen bg-gray-100">
        <nav className="flex flex-row justify-end items-center py-3 px-8 border-b border-gray-300">
            <Link href={MainPaths.INDEX}>
                <a className="mr-5">Home</a>
            </Link>
            <Link href={MainPaths.AUTH}>
                <a className="px-3 py-2 rounded-lg bg-black text-white hover:opacity-60 
                    transition-opacity duration-500 ease-out">
                    Sign In
                </a>
            </Link>
        </nav>
        <div className="container mx-auto py-4">
            {children}
        </div>
    </div>
    </>
);
 
export default MainLayout;