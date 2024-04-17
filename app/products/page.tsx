import Breadcrumbs from '../../components/Breadcrumbs';
import ButtonLink from '../../components/ButtonLink';

type Product = {
    id: number;
    name: string;
};

const products: Product[] = [
    { id: 0, name: 'Product Details First' },
    { id: 1, name: 'Product Details Second' },
    { id: 2, name: 'Product Details Last' },
];

const ProductsPage = () => {
    return (
        <section>
            <Breadcrumbs />

            <h2 className='text-xl'>Products Page</h2>

            <ul>
                {products.map(({ id, name }) => (
                    <li key={id}>
                        <ButtonLink href={`products/${id + 1}`} name={name} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProductsPage;
