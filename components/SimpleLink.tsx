import Link from 'next/link';

type Props = {
    href: string;
    name: string;
};

const SimpleLink: React.FC<Props> = ({ href, name }) => <Link href={href}>{name}</Link>;

export default SimpleLink;
