import CategoryCard from '../card';

import "./style.scss";

const CategoryList = ({ categories }) => {
    return <div className={"category-list"}>{
        categories.map((category, index) => {
            return <CategoryCard key={index} category={category} />
        })
    }</div>;
}

export default CategoryList;