import Breadcrumbs from '@/components/Breadcrumbs';
import ButtonLink from '@/components/ButtonLink';

type Props = {
    params: {
        slug: string[];
    };
};

const DocsPage: React.FC<Props> = ({ params }) => {
    const { slug } = params;

    return (
        <section>
            <Breadcrumbs />

            {!slug?.length ? (
                <>
                    <h2 className='text-xl'>Docs Page</h2>
                    <p className='text-md'>Just add to address - `/featured` or `/featured1/subfeatured`</p>
                </>
            ) : (
                <h2 className='text-xl'>Docs Page with subs - {...slug.map((item) => `${item} & `)}</h2>
            )}
        </section>
    );
};

export default DocsPage;
