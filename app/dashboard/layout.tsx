type Props = {
    children: React.ReactNode;
    metrics: React.ReactNode;
    notifications: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children, metrics, notifications }) => {
    return (
        <>
            {notifications}
            {children}
            {metrics}
        </>
    );
};

export default DashboardLayout;
