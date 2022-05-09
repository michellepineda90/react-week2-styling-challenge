import '../Main/Main.css';

function SearchBar() {
    return (
        <div className='search'>
            <input type='button' className='searchBtn btn' />
            <input type='input' id='search' name='search' placeholder= 'Search' className='searchInput' />
        </div>
    )
}

export default SearchBar;
