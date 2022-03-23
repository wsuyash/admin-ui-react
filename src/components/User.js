const User = (props) => {
	const { user, handleDelete } = props;

	return (
		<tr id={user.id} className="border-b-2">
			<td className="p-4 text-gray-800"><input className="w-5 h-5" type="checkbox" /></td>
			<td className="p-4 text-gray-800 break-words">{user.name}</td>
			<td className="p-4 text-gray-800 break-words">{user.email}</td>
			<td className="p-4 text-gray-800 break-words">{user.role.charAt(0).toUpperCase() + user.role.substring(1)}</td>
			<td className="p-4 text-gray-800 flex w-1/5 justify-between items-center gap-1">
					<i className="fa-solid fa-pen-to-square text-blue-500 hover:cursor-pointer"></i>
					<i className="fa-solid fa-trash-can text-red-500 hover:cursor-pointer" onClick={() => handleDelete(user.id)}></i>
			</td>
		</tr>
	);

}

export default User;