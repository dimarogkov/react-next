import ButtonLink from '../components/ButtonLink';

const NotFoundPage = () => {
    return (
        <section>
            <h1 className='text-xl'>Page not Found | 404</h1>
            <ButtonLink href='/' name='Go Home' />
        </section>
    );
};

export default NotFoundPage;
