'use client';
import BlogInfo from '@/components/BlogInfo';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

const BlogPage = () => {
    const router = useRouter();

    const goHome = () => router.push('/');

    return (
        <section>
            <h2 className='text-xl'>Blog Page</h2>

            <Suspense fallback={<div>Loading ...</div>}>
                <BlogInfo />
            </Suspense>

            <button className='link' onClick={goHome}>
                Go to Home Page
            </button>
        </section>
    );
};

export default BlogPage;
