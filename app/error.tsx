'use client';

type Props = {
    error: Error;
};

const ErrorBoundary: React.FC<Props> = ({ error }) => {
    return (
        <section>
            <h1 className='text-xl'>{error.message}</h1>
        </section>
    );
};

export default ErrorBoundary;
