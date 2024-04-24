import { StaticImageData } from 'next/image';

export interface Photo {
    id: number;
    src: StaticImageData;
    title: string;
    location: string;
}
