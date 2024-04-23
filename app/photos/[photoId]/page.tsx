import ButtonLink from '@/components/ButtonLink';
import { photos } from '@/data/photos';
import Image from 'next/image';

type Props = {
    params: {
        photoId: string;
    };
};

const PhotoPage: React.FC<Props> = ({ params }) => {
    const currentPhoto = photos.filter(({ id }) => id === +params.photoId)[0];

    return (
        <section>
            <h1 className='text-xl mb-4'>
                {currentPhoto.title} | {currentPhoto.location}
            </h1>

            <Image
                src={currentPhoto.src}
                alt={currentPhoto.title}
                loading='lazy'
                className='w-[400px] object-cover aspect-square mb-4'
            />

            <ButtonLink href='/photos' name='Go Back' />
        </section>
    );
};

export default PhotoPage;
