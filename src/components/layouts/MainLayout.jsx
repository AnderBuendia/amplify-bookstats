import Head from '../generic/Head';
import Header from '../generic/Header';

const MainLayout = ({title, description, url, children}) => (
    <>
    <Head 
        title={title}
        description={description}
        url={url}
    />
    
    <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto flex justify-center items-center">
            {children}
        </div>
    </div>
    </>
);
 
export default MainLayout;