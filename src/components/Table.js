import User from "./User";

const Table = (props) => {
	const { users, handleDelete } = props;

	return (
		<div id="table" className="Table mb-8">
			<table className="table-fixed w-full my-4 text-lg">

				<thead className="font-bold">
					<tr className="border-b-2">
						<td className="p-4"><input className="w-5 h-5" type="checkbox" /></td>
						<td className="p-4">Name</td>
						<td className="p-4">Email</td>
						<td className="p-4">Role</td>
						<td className="p-4">Actions</td>
					</tr>
				</thead>
				
				<tbody>
					{ users.map((user, index) => (
						<User user={user} key={index} handleDelete={handleDelete} />
					)) }
				</tbody>

			</table>
		</div>
	);
}

export default Table;
