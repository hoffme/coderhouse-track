import CategoryCard from '../card';

import "./style.scss";

/*
    settings = {
        desing?: 'horizontal' | 'vertical' | 'grid' (defautl),
        frame?: 'card' | 'border' | 'botomless' (defautl),
        limit?: number | undefined (defautl)
    }
*/

const CategoryList = ({ categories, settings = {}, settingsItem }) => {
    if (!settings.desing) settings.desing = 'horizontal';
    if (!settings.frame) settings.frame = 'botomless';

    const style = `category-list desing-${settings.desing} frame-${settings.frame}`;
    
    return <div className={style}>{
        categories.reduce((result, category, index) => {
            if (!settings.limit || settings.limit > index) {
                result.push(<CategoryCard
                    key={index}
                    category={category}
                    settings={settingsItem}
                />);
            }
            return result;
        }, [])
    }</div>;
}

export default CategoryList;