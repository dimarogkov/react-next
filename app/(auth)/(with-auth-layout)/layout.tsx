type Props = {
    children: React.ReactNode;
};

const WithAuthLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <h1>This is Auth Layout</h1>
            {children}
        </>
    );
};

export default WithAuthLayout;
