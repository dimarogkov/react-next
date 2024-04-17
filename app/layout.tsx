import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Next JS',
        template: 'Next JS | %s',
    },
};

type Props = {
    children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
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
