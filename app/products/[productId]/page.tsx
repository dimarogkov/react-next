import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ID - ${params.productId}`,
    };
};

const ProductDetailsPage: React.FC<Props> = ({ params }) => {
    const { productId } = params;

    if (+productId > 100) {
        return notFound();
    }

    return (
        <section>
            <h2 className='text-xl'>Product ID - {productId}</h2>
            <h2>Product Details Page</h2>
        </section>
    );
};

export default ProductDetailsPage;
