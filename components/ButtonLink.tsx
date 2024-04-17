import Link from 'next/link';

type Props = {
    href: string;
    name: string;
};

const ButtonLink: React.FC<Props> = ({ href, name }) => (
    <Link href={href} className='btn btn-neutral'>
        {name}
    </Link>
);

export default ButtonLink;
