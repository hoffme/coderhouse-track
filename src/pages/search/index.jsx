import './style.scss';

import { useParams } from 'react-router-dom';

import ProductListContainer from '../../components/product/listContainer';
import Footer from '../../components/footer';

const SearchPage = () => {
    const { categoryId } = useParams('categoryId');
    const { query } = useParams('query');

    const filter = {};
    if (categoryId) filter.category = { url_id: categoryId };
    if (query) filter.query = query;

    return <>
        <ProductListContainer
            title={"Resultados"}
            filters={filter}
            settings_list={{desing: 'grid'}}
        />
        <Footer />
    </>;
}

export default SearchPage;