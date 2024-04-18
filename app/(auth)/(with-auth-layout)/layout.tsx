type Props = {
    children: React.ReactNode;
};

const withAuthLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <h1 className='text-xl'>With Auth Layout</h1>
            {children}
        </>
    );
};

export default withAuthLayout;
