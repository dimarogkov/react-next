import { photos } from '@/data/photos';
import Modal from '@/components/Modal';
import Image from 'next/image';

type Props = {
    params: {
        photoId: string;
    };
};

const ModalSlot: React.FC<Props> = ({ params }) => {
    const currentPhoto = photos.filter(({ id }) => id === +params.photoId)[0];

    return (
        <Modal>
            <Image
                src={currentPhoto.src}
                alt={currentPhoto.title}
                loading='lazy'
                className='w-full object-cover aspect-square'
            />

            <div className='p-[8px] text-black'>
                <h1 className='text-xl mb-[4px]'>{currentPhoto.title}</h1>
                <h3 className='text-md'>{currentPhoto.location}</h3>
            </div>
        </Modal>
    );
};

export default ModalSlot;
