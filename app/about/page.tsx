import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Page',
};

const AboutPage = () => {
    return (
        <section>
            <h2 className='text-xl'>About Page</h2>
        </section>
    );
};

export default AboutPage;
