import { Photo } from '@/types/photo';
import photo1 from '@/public/photo_1.jpg';
import photo2 from '@/public/photo_2.jpg';
import photo3 from '@/public/photo_3.jpg';
import photo4 from '@/public/photo_4.jpg';
import photo5 from '@/public/photo_5.jpg';
import photo6 from '@/public/photo_6.jpg';
import photo7 from '@/public/photo_7.jpg';

export const photos: Photo[] = [
    {
        id: 1,
        src: photo1,
        title: 'Great Wall of China',
        location: 'China',
    },
    {
        id: 2,
        src: photo2,
        title: 'Petra',
        location: 'Jordan',
    },
    {
        id: 3,
        src: photo3,
        title: 'Christ the Redeemer',
        location: 'Brazil',
    },
    {
        id: 4,
        src: photo4,
        title: 'Machu Picchu',
        location: 'Peru',
    },
    {
        id: 5,
        src: photo5,
        title: 'Chichen Itza',
        location: 'Mexico',
    },
    {
        id: 6,
        src: photo6,
        title: 'Roman Colosseum',
        location: 'Italy',
    },
    {
        id: 7,
        src: photo7,
        title: 'Taj Mahal',
        location: 'India',
    },
];
