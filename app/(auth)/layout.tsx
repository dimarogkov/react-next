'use client';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { authLinks } from '@/data/links';
import Link from 'next/link';

type Props = {
    children: React.ReactNode;
};

const RootAuthLayout: React.FC<Props> = ({ children }) => {
    const pathName = usePathname();

    return (
        <>
            <h1 className='text-xl mb-4'>This is Auth Layout</h1>

            <ul className='mb-4'>
                {authLinks.map(({ name, href }) => {
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
