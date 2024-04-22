type Props = {
    children: React.ReactNode;
    metrics: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children, metrics, notifications, login }) => {
    const isLoggedIn = true;

    return isLoggedIn ? (
        <>
            {children}
            <br />
            {notifications}
            <br />
            {metrics}
        </>
    ) : (
        <>{login}</>
    );
};

export default DashboardLayout;
