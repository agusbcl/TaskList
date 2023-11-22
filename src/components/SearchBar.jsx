function SearchBar({onSearch}) {
    return (
        <form>
            <input type="search" name="search" id="search" 
            aria-label="buscar" placeholder="buscar" 
            onChange={(e) => onSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;