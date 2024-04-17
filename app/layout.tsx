import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import './globals.css';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='en' data-theme='dark'>
            <body>
                <Header />
                <Breadcrumbs />

                {children}
            </body>
        </html>
    );
};

export default RootLayout;
