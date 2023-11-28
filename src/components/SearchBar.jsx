import '../App.css';

function SearchBar({onSearch}) {
    return (
        <form>
            <input type="search" name="search" id="search" 
            aria-label="buscar" placeholder="Filtrar por contenido" 
            onChange={(e) => onSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;