import './style.scss';

import loupe from '../../assets/icons/loupe.svg';

import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState("");
    let history = useHistory("");

    return <div className="search">
        <input
            placeholder={"Buscar ..."}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => {
                if (e.code === 'Enter') {
                    history.push("/search/" + query)
                }
            }}
        />
        <Link to={"/search/" + query}>
            <img src={loupe} alt={"lupa"} />
        </Link>
    </div>;
}

export default Search;