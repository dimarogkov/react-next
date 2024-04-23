import { StaticImageData } from 'next/image';

export interface Photo {
    id: string;
    src: StaticImageData;
    title: string;
    location: string;
}
