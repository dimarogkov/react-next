'use client';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
    { name: 'Login Page', href: '/login' },
    { name: 'Register Page', href: '/register' },
    { name: 'Forgot Password Page', href: '/forgot-password' },
];

type Props = {
    children: React.ReactNode;
};

const RootAuthLayout: React.FC<Props> = ({ children }) => {
    const pathName = usePathname();

    return (
        <>
            <h1 className='text-xl mb-4'>This is Auth Layout</h1>

            <ul className='mb-4'>
                {links.map(({ name, href }) => {
                    const isActive = pathName.startsWith(href);

                    return (
                        <li key={name}>
                            <Link href={href} className={cn('link', { 'link-primary': isActive })}>
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {children}
        </>
    );
};

export default RootAuthLayout;
