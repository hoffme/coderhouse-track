import { useParams } from "react-router-dom";

import './style.scss';

import ProductDetailContainer from '../../components/product/detailContainer';
import Footer from '../../components/footer';

const ProductPage = () => {
    const { productUrl } = useParams('productUrl');

    return <>
        <ProductDetailContainer filter={{url: productUrl}} />
        <Footer />
    </>;
}

export default ProductPage;