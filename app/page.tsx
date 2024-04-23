import ButtonLink from '../components/ButtonLink';
import { rootLinks } from '@/data/links';

const HomePage = () => {
    return (
        <main>
            <h1 className='text-xl'>Home Page</h1>

            <ul>
                {rootLinks.map(({ name, href }) => (
                    <li key={name}>
                        <ButtonLink href={href} name={name} />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default HomePage;
