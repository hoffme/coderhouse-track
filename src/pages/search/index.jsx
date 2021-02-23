import './style.scss';

import { useParams } from 'react-router-dom';

import ProductListContainer from '../../components/product/listContainer';

const SearchPage = () => {
    const { categoryId } = useParams('categoryId');
    const { query } = useParams('query');

    const filter = {};
    if (categoryId) filter.category = { id: categoryId };
    if (query) filter.query = query;

    return <>
        <ProductListContainer
            title={"Resultados"}
            filters={filter}
        />
    </> 
}

export default SearchPage;