const Table = (props) => {
	const { users } = props;

	return (
		<div className="Table mb-8">
			<table className="table-fixed w-full my-4 text-lg">

				<thead className="font-bold">
					<tr className="border-b-2">
						<td className="p-4"><input type="checkbox" /></td>
						<td className="p-4">Name</td>
						<td className="p-4">Email</td>
						<td className="p-4">Role</td>
						<td className="p-4">Actions</td>
					</tr>
				</thead>
				
				<tbody>
					{ users.map((user, index) => {
						return <tr key={index} className="border-b-2">
							<td className="p-4 text-gray-800"><input type="checkbox" /></td>
							<td className="p-4 text-gray-800 break-words">{user.name}</td>
							<td className="p-4 text-gray-800 break-words">{user.email}</td>
							<td className="p-4 text-gray-800 break-words">{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</td>
							<td className="p-4 text-gray-800">
								<div className="flex w-[15%] justify-between items-center gap-1">
									<i className="fa-solid fa-pen-to-square text-blue-500 hover:cursor-pointer"></i>
									<i className="fa-solid fa-trash-can text-red-500 hover:cursor-pointer"></i>
								</div>
							</td>
						</tr>
					} ) }
				</tbody>

			</table>
		</div>
	);
}

export default Table;