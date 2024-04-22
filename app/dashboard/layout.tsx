type Props = {
    children: React.ReactNode;
    metrics: React.ReactNode;
    notifications: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children, metrics, notifications }) => {
    return (
        <>
            {children}
            <br />
            {notifications}
            <br />
            {metrics}
        </>
    );
};

export default DashboardLayout;
