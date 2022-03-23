const SearchBar = (props) => {
	const { search, setSearch, handleSearch } = props;

	return (
		<div className="SearchBar">
			<input
				className="w-full p-2 border-2 border-gray-300"
				placeholder="Search by name, email, or role"
				value={search}
				onInput={(e) => { setSearch(() => e.target.value); handleSearch(); }}
			/>
		</div>
	);
}

export default SearchBar;