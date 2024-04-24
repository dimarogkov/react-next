'use client';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Blog Page',
};

const BlogPage = () => {
    const router = useRouter();

    const goHome = () => router.push('/');

    return (
        <section>
            <h2 className='text-xl'>Blog Page</h2>
            <button className='link' onClick={goHome}>
                Go to Home Page
            </button>
        </section>
    );
};

export default BlogPage;
