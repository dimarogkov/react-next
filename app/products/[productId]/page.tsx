import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        productId: string;
    };
};

const ProductDetailsPage: React.FC<Props> = ({ params }) => {
    const { productId } = params;

    if (+productId > 100) {
        return notFound();
    }

    return (
        <section>
            <Breadcrumbs />

            <h2 className='text-xl'>Product ID - {productId}</h2>
            <h2>Product Details Page</h2>
        </section>
    );
};

export default ProductDetailsPage;
