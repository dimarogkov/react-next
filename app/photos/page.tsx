import { photos } from '@/data/photos';
import Image from 'next/image';
import Link from 'next/link';

const PhotosPage = () => {
    return (
        <section>
            <h1 className='text-xl mb-4'>Photos Page</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {photos.map(({ id, src, title }) => (
                    <Link href={`/photos/${id}`} key={id}>
                        <Image
                            src={src}
                            alt={title}
                            loading='lazy'
                            className='w-full object-cover aspect-square mb-2'
                        />
                        <h3 className='text-md'>{title}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PhotosPage;
