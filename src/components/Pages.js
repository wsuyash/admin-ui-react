const Pages = (props) => {
	const { usersPerPage, totalUsers, handleChangePage, currentPageNumber, jumpToFirstPage, jumpToLastPage, goBackOnePage, goForwardOnePage } = props;

	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="Pages flex justify-center items-center gap-4 flex-wrap m-auto">
			
			<li className="text-white p-2 rounded-full bg-blue-500 hover:cursor-pointer hover:bg-blue-900"
				onClick={() => jumpToFirstPage()}	
			>
					<div className="w-6 h-6 text-center">
						<i className="fa-solid fa-angles-left"></i>
					</div>
			</li>

			<li className="text-white p-2 rounded-full bg-blue-500 hover:cursor-pointer hover:bg-blue-900" onClick={() => goBackOnePage()}>
					<div className="w-6 h-6 text-center">
						<i className="fa-solid fa-angle-left"></i>
					</div>
			</li>

			{pageNumbers.map((number) => {
				if (number === currentPageNumber) {
					return <li key={number} className="text-white p-2 rounded-full bg-blue-900 hover:cursor-pointer hover:bg-blue-900" onClick={() => handleChangePage(number)}>
						<div className="w-6 h-6 text-center">{number}</div>
					</li>
				}
				return <li key={number} className="text-white p-2 rounded-full bg-blue-500 hover:cursor-pointer hover:bg-blue-900" onClick={() => handleChangePage(number)}>
					<div className="w-6 h-6 text-center">{number}</div>
				</li>
			})}

			<li className="text-white p-2 rounded-full bg-blue-500 hover:cursor-pointer hover:bg-blue-900" onClick={() => goForwardOnePage()}>
					<div className="w-6 h-6 text-center">
						<i className="fa-solid fa-angle-right"></i>
					</div>
			</li>

			<li className="text-white p-2 rounded-full bg-blue-500 hover:cursor-pointer hover:bg-blue-900" onClick={() => jumpToLastPage()}>
					<div className="w-6 h-6 text-center">
						<i className="fa-solid fa-angles-right"></i>
					</div>
			</li>

		</ul>
	);
}

export default Pages;