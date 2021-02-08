import './style.scss';

import loupe from '../../assets/icons/loupe.svg';

const Search = () => {
    return <div className="search">
        <input placeholder={"Buscar ..."} />
        <button>
            <img src={loupe} alt={"lupa"} />
        </button>
    </div>;
}

export default Search;