'use client';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
    children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children }) => {
    const router = useRouter();

    const closeModal = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <div className='fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10' onClick={closeModal}>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6'>
                {children}
            </div>
        </div>
    );
};

export default Modal;
