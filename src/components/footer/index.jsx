import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CategoryContext from '../../contexts/category';

import './style.scss';

const Footer = () => {
    const { categories } = useContext(CategoryContext);

    return <footer className={"footer app-width"}>
        <div className={"columns"}>
            <div className={"section section-w-3"}>
                <label className={"section-title"}>Categorias</label>
                <div className={"items"}>
                    {
                        categories.map((category, index) => {
                            return <Link key={index} className={"link-rounded"} to={'/category/' + category.url_id} >
                                { category.title }
                            </Link>
                        })
                    }
                </div>
            </div>
            <div className={"section section-w-2"}>
                <label className={"section-title"}>Contacto</label>
                <div className={"items-row"}>
                    <a href={"tel:+542396610172"} className={"link-complete"}>Tel: +54 2396 610172</a>
                    <a href={"tel:+542396610172"} className={"link-complete"}>Wts: +54 2396 610172</a>
                    <a href={"tel:+542396610172"} className={"link-complete"}>Ins: @trank</a>
                    <a href={"tel:+542396610172"} className={"link-complete"}>Twi: @trank</a>
                    <a href={"tel:+542396610172"} className={"link-complete"}>Eml: contacto@trank.com</a>
                </div>
            </div>
        </div>
        <label className={"copyright"}>Copyright © 2021 Trank. Todos los derechos reservados.</label>
    </footer>;
}

export default Footer;