import ButtonLink from '../../components/ButtonLink';
import { products } from '@/data/products';

const ProductsPage = () => {
    return (
        <section>
            <h2 className='text-xl'>Products Page</h2>

            <ul>
                {products.map(({ id, name }) => (
                    <li key={id}>
                        <ButtonLink href={`/products/${id + 1}`} name={name} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProductsPage;
