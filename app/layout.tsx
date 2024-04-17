import './globals.css';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang='en' data-theme='dark'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
