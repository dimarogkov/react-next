import ButtonLink from '../components/ButtonLink';

const HomePage = () => {
    return (
        <main>
            <h1 className='text-xl'>Home Page</h1>
            <h1 className='text-xl'>Pages</h1>

            <ul>
                <li>
                    <ButtonLink href='about' name='About Page' />
                </li>
                <li>
                    <ButtonLink href='blog' name='Blog Page' />
                </li>
                <li>
                    <ButtonLink href='products' name='Products Page' />
                </li>
                <li>
                    <ButtonLink href='docs' name='Docs Page' />
                </li>
            </ul>

            <h2>Auth Pages</h2>

            <ul>
                <li>
                    <ButtonLink href='login' name='Login Page' />
                </li>
                <li>
                    <ButtonLink href='register' name='Register Page' />
                </li>
                <li>
                    <ButtonLink href='forgot-password' name='Forgot Password Page' />
                </li>
            </ul>
        </main>
    );
};

export default HomePage;
