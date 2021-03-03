import './style.scss';

import { useParams } from 'react-router-dom';

import Header from '../../components/header';
import ProductListContainer from '../../components/product/listContainer';

const SearchPage = () => {
    const { categoryId } = useParams('categoryId');
    const { query } = useParams('query');

    const filter = {};
    if (categoryId) filter.category = { id: categoryId };
    if (query) filter.query = query;

    return <>
        <Header />
        <ProductListContainer title={"Resultados"} filters={filter} />
    </>;
}

export default SearchPage;