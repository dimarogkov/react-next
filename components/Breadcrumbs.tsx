'use client';
import { usePathname } from 'next/navigation';
import SimpleLink from './SimpleLink';

const Breadcrumbs = () => {
    const paths = usePathname();
    const pathNames = ['home', ...paths.split('/').filter((path) => path)];

    return (
        <div className='text-md breadcrumbs'>
            <ul>
                {pathNames.map((path, index) => {
                    const linkHref = `/${pathNames.slice(1, index + 1).join('/')}`;
                    const linkName = path.charAt(0).toUpperCase() + path.slice(1);

                    return (
                        <li key={index}>
                            {pathNames.length - 1 !== index ? <SimpleLink href={linkHref} name={linkName} /> : linkName}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
