import ButtonLink from '../components/ButtonLink';

const links = [
    { name: 'About Page', href: '/about' },
    { name: 'Blog Page', href: '/blog' },
    { name: 'Products Page', href: '/products' },
    { name: 'Docs Page', href: '/docs' },
    { name: 'Login Page', href: '/login' },
];

const HomePage = () => {
    return (
        <main>
            <h1 className='text-xl'>Home Page</h1>

            <ul>
                {links.map(({ name, href }) => (
                    <li key={name}>
                        <ButtonLink href={href} name={name} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default HomePage;
